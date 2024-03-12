const LEVEL_BIG_CHALLENGE = () => {

  level5lost = false
  wallGroupsEnabled = { red: true, green: false, black: true }

  return [
    [
      'background',
      [{
        backgroundImage: 'url("graphics/red_cubes.png")',
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
      ],
      'player_'
    ],
    [
      'image_wall',
      [
        vec2(32, 800),
        vec2(1, 1),
        0,
        {horizontal: 'start', vertical: 'start'},
        'leo',
        vec2(200, 100)
      ]
    ],

    [
      'styled_wall',
      [
        vec2(32, 700),
        vec2(200, 100),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(232, 600),
        vec2(500, 100),
        [255, 0, 0],
        'red'
      ]
    ],

    [
      'textarea_wall',
      [
        vec2(32, 465),
        vec2(2, 2),
        0,
        { horizontal: 'start', vertical: 'start' },
        vec2(30,2),
        'HINT: your target is on the right'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(1000, 350),
        vec2(100, 100),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(1100, 250),
        vec2(100, 1000),
        [50, 50, 255],
        'black'
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
        64,
      ]
    ],

    [
      'target',
      [
        vec2(1500, 800)
      ]
    ],

    [
      'checkbox',
      [
        vec2(1000, 80),
        vec2(5, 5),
        0,
        {vertical: 'start', horizontal: 'start'},
        true,
        (checked) => {
          if (level5lost) {
            return
          }
          playSound('switch')
          wallGroupsEnabled.red = checked
          wallGroupsEnabled.green = !checked
        }
      ]
    ],
    ...controlSet,
  ]
}
