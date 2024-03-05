const LEVEL3 = () => [
  [
    'player',
    [
      vec2(32, 500),
      vec2(1, 1),
      0,
      { horizontal: 'start', vertical: 'start' },
    ]
  ],

  [
    'image_wall',
    [
      vec2(1300, 500),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      'platform',
      vec2(100, 64),
    ]
  ],

  [
    'textarea_wall',
    [
      vec2(32, 600),
      vec2(2, 2),
      0,
      { horizontal: 'start', vertical: 'start' },
      vec2(30,2),
      'hello world'
    ]
  ],
  [
    'textarea_wall',
    [
      vec2(32, 400),
      vec2(2, 2),
      0,
      { horizontal: 'start', vertical: 'start' },
      vec2(30,2),
      'yea'
    ],
  ],
  [
    'target',
    [
      vec2(96, 400-40),
    ]
  ],
  [
    'button',
    [
      vec2(1600-32, 32),
      vec2(2, 2),
      0,
      {horizontal: 'end', vertical: 'start'},
      'restart level',
      reloadScene,
    ]
  ]
]
