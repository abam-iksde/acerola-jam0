const LEVEL2 = () => [
  [
    'background',
    [{
      backgroundImage: 'url("graphics/background_lv2.png")',
      backgroundRepeat: 'repeat',
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
      "Here's the game:",
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
  [
    'textfield',
    [
      vec2(820, 200),
      vec2(2, 2),
      0,
      {horizontal: 'start', vertical: 'start'},
      controls.jump,
      (value) => controls.jump = value,
      true,
    ],
  ],
  ['controls_warning_label', []],
  ...controlSet,
]

registerClass('controls_warning_label', () => {
  const label = createLabel(vec2(820, 260),vec2(0, 0),0, {horizontal: 'start', vertical: 'start'}, `
    "Space" and "Enter" are not recommended as they<br/>
    can also be used for triggering "onclick" events :)
  `)
  let shown = false

  assignStyle(label.component, {
    color: 'rgb(255, 150, 150)'
  })

  label.update = () => {
    const isSpaceOrEnter = Object.values(controls).some(
      (key) => ['space', 'enter', ' '].includes(trimKey(key).toLowerCase())
    )
    if (!shown && isSpaceOrEnter) {
      label.scale = vec2(2, 2)
      shown = true
      return
    }

    if (!isSpaceOrEnter) {
      label.scale = vec2(0, 0)
      shown = false
    }
  }

  return label
})
