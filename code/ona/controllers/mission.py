from odoo import http
import json


class Mission(http.Controller):

    @http.route('/missions/tasks_count', auth='public', type='http', website=False, csrf=False)
    def get_tasks(self, **kwargs):
        # ('responsible', '=', http.request.env.user.id)
        tasks_drainage = http.request.env['ona.drainage'].sudo().read_group([], [], ['state'])
        tasks_quick_diagnosis = http.request.env['ona.quick.diagnosis'].sudo().read_group([], [], ['state'])
        states = dict(http.request.env['ona.drainage'].sudo().fields_get()['state']['selection'])
        
        data = {}
        for task_drainage in tasks_drainage:
            data[task_drainage['state']] = data.get(task_drainage['state'], 0) + task_drainage['state_count']
            
        for task_quick_diagnosis in tasks_quick_diagnosis:
            data[task_quick_diagnosis['state']] = data.get(task_quick_diagnosis['state'], 0) + task_drainage['state_count']
            
        for state in states.keys():
            data[state] = data.get(state, 0)
        
        data['total'] = sum(data.values())
            
        return http.Response(
            json.dumps(data),
            content_type="application/json"
        )
    
    @http.route('/missions/table/tasks_drainage', auth='public', type='http', website=False, csrf=False)
    def get_table_tasks_drainage(self, **kwargs):
        tasks_drainage = http.request.env['ona.drainage'].sudo().search_read([], ['id', 'name', 'type', 'truck_license_plate', 'date', 'state'])
        
        data = []
        for task_drainage in tasks_drainage:
            raw = {}
            for key in task_drainage.keys():
                raw[key] = task_drainage[key] if key != 'date' else task_drainage[key].strftime("%d %b %Y")
            data.append(raw)
        
        return http.Response(
            json.dumps(data),
            content_type="application/json"
        )
    
    @http.route('/missions/table/tasks_quick_diagnosis', auth='public', type='http', website=False, csrf=False)
    def get_table_tasks_quick_diagnosis(self, **kwargs):
        tasks_quick_diagnosis = http.request.env['ona.quick.diagnosis'].sudo().search_read([], ['id', 'name', 'sewer_id', 'date', 'state'])
            
        data = []
        for task_quick_diagnosis in tasks_quick_diagnosis:
            raw = {}
            for key in task_quick_diagnosis.keys():
                raw[key] = task_quick_diagnosis[key] if key != 'date' else task_quick_diagnosis[key].strftime("%d %b %Y")
            data.append(raw)
        
        return http.Response(
            json.dumps(data),
            content_type="application/json"
        )
    
    @http.route('/missions/graph/tasks_drainage', auth='public', type='http', website=False, csrf=False)
    def get_graph_tasks_drainage(self, **kwargs):
        tasks_drainage = http.request.env['ona.drainage'].sudo().read_group([], ['state'], ['date:day', 'state'], lazy=False, orderby='date asc')
        states = dict(http.request.env['ona.drainage'].sudo().fields_get()['state']['selection'])
        
        data = {}
        for task in tasks_drainage:
            data[task['date:day']] = data.get(task['date:day'], {})
            data[task['date:day']][task['state']] = data[task['date:day']].get(task['state'], 0) + task['__count']
        
        
        for d in data.keys():
            for state in states.keys():
                data[d][state] = data[d].get(state, 0)
            
        return http.Response(
            json.dumps(data),
            content_type="application/json"
        )
        
    @http.route('/missions/graph/tasks_quick_diagnosis', auth='public', type='http', website=False, csrf=False)
    def get_graph_tasks_quick_diagnosis(self, **kwargs):
        tasks_quick_diagnosis = http.request.env['ona.quick.diagnosis'].sudo().read_group([], ['state'], ['date:day', 'state'], lazy=False, orderby='date asc')
        states = dict(http.request.env['ona.drainage'].sudo().fields_get()['state']['selection'])
        
        data = {}
        for task in tasks_quick_diagnosis:
            data[task['date:day']] = data.get(task['date:day'], {})
            data[task['date:day']][task['state']] = data[task['date:day']].get(task['state'], 0) + task['__count']
        
        for d in data.keys():
            for state in states.keys():
                data[d][state] = data[d].get(state, 0)
            
        return http.Response(
            json.dumps(data),
            content_type="application/json"
        )
