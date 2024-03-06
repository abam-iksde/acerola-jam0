const LEVEL4 = () => [
  [
    'background',
    [{
      backgroundColor: 'rgb(255,200,200)',
    }]
  ],
  
  [
    'player',
    [
      vec2(0, 100),
      vec2(1, 1),
      0,
      {vertical: 'start', horizontal: 'start'},
    ],
    'player'
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
]

registerClass('player_position_slider', (...args) => {
  const slider = createSlider(...args)
  slider.update = () => {
    const { player } = objRefs
    player.movementAccumulator.x = slider.component.value - player.position.x
  }
  return slider
})
