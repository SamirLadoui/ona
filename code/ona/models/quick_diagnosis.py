from odoo import api, fields, models


class QuickDiagnosis(models.Model):
    _name = 'ona.quick.diagnosis'
    _description = 'Quick Diagnosis'

    name = fields.Char(
        string='Name'
    )

    sewer_id = fields.Many2one(
        comodel_name='ona.sewer',
        string='Sewer'
    )
    