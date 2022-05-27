from odoo import api, fields, models


class QuickDiagnosis(models.Model):
    _name = 'ona.quick.diagnosis'
    _description = 'Quick Diagnosis'

    name = fields.Char(
        string='Name',
        required=True
    )

    sewer_id = fields.Many2one(
        comodel_name='ona.sewer',
        required=True,
        string='Sewer'
    )

    date = fields.Datetime(
        string='Date',
        default=fields.Datetime.now,
        readonly=True
    )
    

    vehicle_accessibility = fields.Selection(
        string='Vehicle Accessibility',
        required=True,
        selection=[
            ('nac', 'NAC'),
            ('vl', 'VL'),
            ('pl', 'PL')
        ]
    )

    traffic_density = fields.Selection(
        string='Traffic Density',
        required=True,
        selection=[
            ('null', 'Null'),
            ('rare', 'Rare'),
            ('medium', 'Medium'),
            ('dense', 'Dense'),
        ]
    )

    h2s_risk = fields.Boolean(
        string='H2S Risk',
    )

    road_condition = fields.Selection(
        string='Road Condition',
        required=True,
        selection=[
            ('bitumen', 'Bitumen'),
            ('ground', 'Ground'),
        ]
    )

    ground_nature = fields.Selection(
        string='Ground Nature',
        required=True,
        selection=[
            ('flat', 'Flat'),
            ('slope', 'Slope'),
            ('steep_slope', 'Steep Slope'),
        ]
    )

    ivp_rating = fields.Selection(
        string='IVP Rating',
        selection=[
            ('1', '1'),
            ('2', '2'),
            ('3', '3'),
        ]
    )

    weather = fields.Selection(
        string='Weather',
        selection=[
            ('dry', 'Dry'),
            ('rain', 'Rain'),
            ('heavy_rain', 'Heavy Rain'),
        ]
    )

    trunk_ids = fields.One2many(
        comodel_name='ona.trunk',
        inverse_name='quick_diagnosis_id', 
        string='Trunks'
    )

    #####################################
    ## new fields (from sewer to here) ##
    #####################################

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

    