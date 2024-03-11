function LEVEL_MENU() {
  return [
    [
      'image',
      [
        vec2(0, 0),
        vec2(1, 1),
        0,
        {vertical: 'start', horizontal: 'start'},
        'menu_background'
      ]
    ],
    [
      'button',
      [
        vec2(100, 380),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '1. walk',
        () => gotoLevel(1),
      ]
    ],
    [
      'button',
      [
        vec2(300, 650),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '2. jump',
        () => gotoLevel(2),
        !levelsUnlocked[2]
      ]
    ],
    [
      'button',
      [
        vec2(330, 260),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '3. memory',
        () => gotoLevel(3),
        !levelsUnlocked[3]
      ]
    ],
    [
      'button',
      [
        vec2(880, 70),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '4. text based adventure',
        () => gotoLevel(4),
        !levelsUnlocked[4]
      ]
    ],
    [
      'button',
      [
        vec2(830, 420),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '5. slide',
        () => gotoLevel(5),
        !levelsUnlocked[5]
      ]
    ],
    [
      'button',
      [
        vec2(1000, 600),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '6. colored walls',
        () => gotoLevel(6),
        !levelsUnlocked[6]
      ]
    ],
    [
      'button',
      [
        vec2(1150, 180),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '7. bridge',
        () => gotoLevel(7),
        !levelsUnlocked[7]
      ]
    ],
    [
      'showdown_button',
      [
        vec2(1300, 700),
        vec2(3, 3),
        0,
        {vertical: 'start', horizontal: 'start'},
        '8. showdown',
        () => gotoLevel(8),
        !levelsUnlocked[8]
      ]
    ],
    ['domdom_title', []],
    [
      'button',
      [
        vec2(0, 900),
        vec2(2.5, 2.5),
        0,
        {horizontal: 'start', vertical: 'end'},
        'what?',
        () => gotoLevel(10)
      ]
    ]
  ]
}

registerClass('domdom_title', () => {
  const label = createLabel(
    vec2(32, 32),
    vec2(4,4),
    10,
    {vertical: 'start', horizontal: 'start'},
    'Dom in<br/>the land of DOM'
  )

  assignStyle(label.component, {
    color: 'rgb(100, 100, 255)',
  })

  label.update = () => {
    const time = performance.now()/1000
    const sinTimePlus1 = Math.sin(time) + 1
    label.scale = vec2(4 + sinTimePlus1*0.5, 4)
    assignStyle(label.component, {
      color: `rgb(${100 + 20*sinTimePlus1}, ${100 + 35*sinTimePlus1}, 255)`
    })
  }

  return label
})

registerClass('showdown_button', (...args) => {
  const button = createButton(...args)

  assignStyle(button.component, {
    color: 'red'
  })

  return button
})

let levelsUnlocked = {}
// let levelsUnlocked = Array.from({length: 20}).fill(true)
