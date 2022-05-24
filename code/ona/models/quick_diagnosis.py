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

    vehicle_accessibility = fields.Selection(
        string='Vehicle Accessibility',
        selection=[
            ('nac', 'NAC'),
            ('vl', 'VL'),
            ('pl', 'PL')
        ]
    )

    traffic_density = fields.Selection(
        string='Traffic Density',
        selection=[
            ('null', 'Null'),
            ('rare', 'Rare'),
            ('medium', 'Medium'),
            ('dense', 'Dense'),
        ]
    )

    h2s_risk = fields.Boolean(
        string='H2S Risk'
    )

    road_condition = fields.Selection(
        string='Road Condition',
        selection=[
            ('bitumen', 'Bitumen'),
            ('ground', 'Ground'),
        ]
    )

    ground_nature = fields.Selection(
        string='Ground Nature',
        selection=[
            ('flat', 'Flat'),
            ('slope', 'Slope'),
            ('steep_slope', 'Steep Slope'),
        ]
    )

    length = fields.Float(
        string='Length'
    )

    depth = fields.Float(
        string='Depth'
    )

    material = fields.Boolean(
        string='Material'
    )

    flow =  fields.Selection(
        string='Flow',
        selection=[
            ('dry', 'Dry'),
            ('low', 'Low'),
            ('medium', 'Medium'),
            ('strong', 'Strong'),
        ]
    )

    hydrocarbons_presence = fields.Boolean(
        string='Hydrocarbons Presence'
    )

    fill_rate = fields.Selection(
        string='Fill Rate',
        selection=[
            ('lowest', '30'),
            ('low', '50'),
            ('medium', '70'),
            ('high', '100'),
        ]
    )

    deregistration_obstacle = fields.Boolean(
        string='Deregistration Obstacle'
    )

    deformation = fields.Boolean(
        string='Deformation'
    )

    crack = fields.Boolean(
        string='Crack'
    )

    rupture = fields.Boolean(
        string='Rupture'
    )

    partial_collapse_perforation = fields.Boolean(
        string='Partial Collapse Perforation'
    )

    total_collapse = fields.Boolean(
        string='Total Collapse'
    )

    visible_reinforcement = fields.Boolean(
        string='Visible Reinforcement'
    )

    branch_penetrating = fields.Boolean(
        string='Branch Penetrating'
    )

    sealing_gasket_appearing = fields.Boolean(
        string='Sealing Gasket Appearing'
    )

    transverse_dislocation = fields.Boolean(
        string='Transverse Dislocation'
    )

    direction_change = fields.Boolean(
        string='Direction Change'
    )

    roots = fields.Boolean(
        string='Roots'
    )

    infiltration = fields.Boolean(
        string='Infiltration'
    )

    degradation = fields.Boolean(
        string='Degradation'
    )

    ivp_rating = fields.Selection(
        string='IVP Rating',
        selection=[
            ('low', '1'),
            ('medium', '2'),
            ('high', '3'),
        ]
    )

    date = fields.Date(
        string='Data',
        default=fields.Date.today(),
        readonly=True
    )

    weather = fields.Selection(
        string='Weather',
        selection=[
            ('dry', 'Dry'),
            ('rain', 'Rain'),
            ('heavy_rain', 'Heavy Rain'),
        ]
    )


    