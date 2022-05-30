from odoo import api,Command, fields, models


class Drainage(models.Model):
    _name = 'ona.drainage'
    _description = 'Drainage'

    name = fields.Char(
        string='Name',
        default="/",
        required=True,
        readonly=True,
        copy=False,
        index=True
    )
    
    date = fields.Datetime(
        string='Date',
        default=fields.Datetime.now,
        readonly=True
    )
    
    note = fields.Text(
        string='Note'
    )

    state = fields.Selection(
        string='Statut', 
        selection=[
            ('draft', 'Draft'),
            ('confirm', 'Confirm'),
            ('cancel', 'Cancel'),
            ],
        default="draft",
        readonly=True
    )
    
    def action_draft(self):
        for rec in self:
            rec.state = 'draft'
                
    def action_confirm(self):
        for rec in self:
            if rec.name == "/":
                rec.name = self.env['ir.sequence'].next_by_code('ona.drainage')
            rec.state = 'confirm'
            
    def action_cancel(self):
        for rec in self:
            rec.state = 'cancel'