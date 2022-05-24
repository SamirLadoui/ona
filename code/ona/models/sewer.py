from email.policy import default
from odoo import api, fields, models


class Sewer(models.Model):
    _name = 'ona.sewer'
    _description = 'Sewer'

    name = fields.Char(
        string='Name',
        default="/",
        required=True,
        readonly=True,
        copy=False,
        index=True
    )

    active = fields.Boolean(
        string='Active',
        default=True
    )

    date = fields.Date(
        string='Date',
        default=fields.Date.today(),
        readonly=True
    )
    

    state_id = fields.Many2one(
        comodel_name='res.country.state',
        string='State',
        domain=[('country_id', '=', 62)],
        required=True
    )

    commune_id = fields.Many2one(
        comodel_name='res.commune',
        string='Commune',
        required=True,
        domain="[('state_id', '=?', state_id)]"
    )
    
    address = fields.Char(
        string='Address',
    )

    area = fields.Char(
        string='Area',
    )

    longitude = fields.Char(
        string='Longitude',
        required=True
    )
    
    latitude = fields.Char(
        string='Latitude',
        required=True
    )

    ladder = fields.Selection(
        string='Ladder',
        selection=[
            ('good_condition', 'Good Condition'),
            ('bad_condition', 'Bad Condition'),
            ('absent', 'Absent'),
            ],
        required=True,
        default="good_condition"
    )

    type = fields.Selection(
        string='Type',
        selection=[
            ('road', 'Road'),
            ('sidewalk', 'Sidewalk'),
            ('terrain', 'Terrain'),
            ('other', 'Other'),
        ],
        required=True,
        default="road"
        )

    cunette = fields.Boolean(
        string='Cunette',
        default=False
    )

    decantation = fields.Boolean(
        string='Decantation',
        default=False
    )

    buffer_accessibility = fields.Selection(
        string='Accessibility',
        selection=[
            ('a', 'A'),
            ('nma', 'NMA'),
            ('nap', 'NAP'),
            ('nac', 'NAC'),
            ('pp', 'PP'),
            ('s_bati', 'S/BATI'),
            ],
        required=True
    )

    buffer_condition = fields.Selection(
        string='Condition',
        selection=[
            ('good', 'Good'),
            ('bad', 'Bad'),
            ('absent', 'Absent'),
            ],
        required=True
        )
    
    buffer_level = fields.Float(
        string='Level'
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
                rec.name = self.env['ir.sequence'].next_by_code('ona.sewer')
            rec.state = 'confirm'

    def action_cancel(self):
        for rec in self:
            rec.state = 'cancel'