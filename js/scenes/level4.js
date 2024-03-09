const LEVEL4 = () => [
  [
    'background',
    [{
      backgroundImage: 'url("graphics/craters.png")',
      backgroundRepeat: 'repeat',
    }]
  ],
  
  [
    'player',
    [
      vec2(0, 600),
      vec2(1, 1),
      0,
      {vertical: 'start', horizontal: 'start'},
    ],
    'player_'
  ],
  [
    'level4_walls',
    [
      vec2(0, 0),
      vec2(1, 1),
      0,
      {horizontal: 'start', vertical: 'start'},
      'level_slider',
    ]
  ],
  [
    'target',
    [
      vec2(1600-48, 900-200),
    ]
  ],
  [
    'target',
    [
      vec2(40, 900-40),
    ]
  ],
  [
    'player_position_slider',
    [
      vec2(32,32),
      vec2(3,3),
      0,
      {vertical: 'start', horizontal: 'start'},
      vec2(0, 1600 - 64),
      0,
    ]
  ]
]

registerClass('player_position_slider', (...args) => {
  const slider = createSlider(...args)
  slider.update = () => {
    const player = objRefs['player_']
    if (!player) {
      return
    }
    player.movementAccumulator.x = slider.component.value - player.position.x
  }
  return slider
})

registerClass('level4_walls', (...args) => {
  walls.push(
    {position: vec2(0, 745), size: vec2(408, 67)},
    {position: vec2(134, 812), size: vec2(408, 67)},
    {position: vec2(475, 745), size: vec2(407, 67)},
    {position: vec2(538, 678), size: vec2(67, 67)},
    {position: vec2(815, 678), size: vec2(67, 67)},
    {position: vec2(815, 0), size: vec2(67, 562)},
    {position: vec2(980, 544), size: vec2(67, 268)},
    {position: vec2(980, 745), size: vec2(620, 67)},
  )
  return createImage(...args)
})
