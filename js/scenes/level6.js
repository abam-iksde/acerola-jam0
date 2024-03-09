const LEVEL6 = () => [
  [
    'background',
    [{
      backgroundImage: 'url("graphics/stone.png")',
      backgroundRepeat: 'repeat',
    }]
  ],
  [
    'player',
    [
      vec2(32, 500),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
    ]
  ],
  [
    'colored_label',
    [
      vec2(64, 128),
      vec2(3, 3),
      0,
      {horizontal: 'start', vertical: 'start'},
      'oh no the bridge is broken :(',
      'white'
    ]
  ],
  [
    'textfield',
    [
      vec2(64, 300),
      vec2(3, 3),
      0,
      {horizontal: 'start', vertical: 'start'},
      'graphics/broken_bridge.png',
      undefined,
      undefined,
      300
    ],
    'imagepath'
  ],
  [
    'div',
    [
      vec2(0, 900-157),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      vec2(64, 64),
      {
        backgroundColor: 'black'
      }
    ]
  ],
  [
    'bridge',
    [
      vec2(0, 900-157),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
    ]
  ],
  [
    'target',
    [
      vec2(1600 - 64, 900 - 200)
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

registerClass('bridge', (position, ...args) => {
  const image = registeredClasses['outsourcedImage'](position, ...args)

  const wall = {position, size: vec2(
    Math.max(image.component.clientWidth, 64),
    Math.max(image.component.clientHeight, 64),
  )}

  walls.push(wall)

  const update_ = image.update

  image.update = () => {
    update_()
    wall.size = vec2(
      Math.max(image.component.clientWidth, 64),
      Math.max(image.component.clientHeight, 64),
    )
  }

  return image
})
