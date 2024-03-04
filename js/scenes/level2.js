const LEVEL2 = () => [
  [
    'player',
    [
      vec2(64, 700),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'}
    ]
  ],

  [
    'target',
    [
      vec2(1600-128, 780),
    ]
  ],

  [
    'image_wall',
    [
      vec2(0, 900-64),
      vec2(0.4, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      'floor_lv1',
      vec2(1600 * 0.4, 64),
    ]
  ],

  [
    'image_wall',
    [
      vec2(1600 * 0.6, 900-64),
      vec2(0.4, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      'floor_lv1',
      vec2(1600 * 0.4, 64),
    ]
  ],

  [
    'colored_label',
    [
      vec2(64, 128),
      vec2(3, 3),
      0,
      {horizontal: 'start', vertical: 'start'},
      'An entirely DOM based<br/>game.',
      'white'
    ]
  ],

  [
    'colored_label',
    [
      vec2(790, 100),
      vec2(2, 2),
      0,
      {horizontal: 'end', vertical: 'start'},
      'move left',
      'white'
    ]
  ],
  [
    'colored_label',
    [
      vec2(790, 150),
      vec2(2, 2),
      0,
      {horizontal: 'end', vertical: 'start'},
      'move right',
      'white'
    ]
  ],
  [
    'colored_label',
    [
      vec2(790, 200),
      vec2(2, 2),
      0,
      {horizontal: 'end', vertical: 'start'},
      'jump',
      'white'
    ]
  ],

  [
    'textfield',
    [
      vec2(820, 100),
      vec2(2, 2),
      0,
      {horizontal: 'start', vertical: 'start'},
      'ArrowLeft',
      (value) => controls.left = value,
      true,
    ]
  ],
  [
    'textfield',
    [
      vec2(820, 150),
      vec2(2, 2),
      0,
      {horizontal: 'start', vertical: 'start'},
      'ArrowRight',
      (value) => controls.right = value,
      true,
    ]
  ],
  [
    'textfield',
    [
      vec2(820, 200),
      vec2(2, 2),
      0,
      {horizontal: 'start', vertical: 'start'},
      '',
      (value) => controls.jump = value,
      true,
    ]
  ],
]
