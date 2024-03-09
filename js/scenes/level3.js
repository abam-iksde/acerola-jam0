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
      'bottom text'
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
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sed turpis sit amet maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer posuere varius interdum. Donec pharetra tellus elit, vitae fermentum lectus porta scelerisque. Phasellus dapibus, nunc eu ultricies interdum, tortor eros vehicula sapien, vitae cursus lacus diam et nulla. Vivamus leo nisl, tempus blandit nisl in, ultricies finibus lorem. Aenean et metus et purus luctus suscipit.`
    ],
  ],
  [
    'target',
    [
      vec2(96, 400-40),
    ]
  ],
  ...controlSet,
]
