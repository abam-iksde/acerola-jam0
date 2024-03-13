const LEVEL1 = () => [
  [
    'background',
    [{
      backgroundColor: 'cornflowerblue'
    }]
  ],

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
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      'floor_lv1',
      vec2(1600, 64),
    ]
  ],

  [
    'colored_label',
    [
      vec2(64, 64),
      vec2(3, 3),
      0,
      {horizontal: 'start', vertical: 'start'},
      'Welcome to my game!',
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
    'textfield',
    [
      vec2(820, 100),
      vec2(2, 2),
      0,
      {horizontal: 'start', vertical: 'start'},
      controls.left,
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
      controls.right,
      (value) => controls.right = value,
      true,
    ]
  ],
  ...controlSet,
]
