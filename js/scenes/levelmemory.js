function _cardRotate(obj) {
  const time = performance.now()/1000
  obj.rotation = Math.sin(obj.position.x + time*2.5) * 5
}

registerClass('card_covered', (position) => {
  let revealed = false
  const image = createImage(position, vec2(1, 1), 0, {horizontal: 'center', vertical: 'center'}, 'card_reverse', () => {
    revealed = true
  })
  image.fullyRevealed = false
  image.update = (delta) => {
    _cardRotate(image)
    if (revealed && !image.fullyRevealed) {
      image.scale = vec2(Math.max(image.scale.x - delta * 4, 0), 1)
      if (image.scale.x === 0) {
        image.fullyRevealed = true
        if (objRefs['cardrev_right'].fullyRevealed && objRefs['cardrev_left'].fullyRevealed) {
          setTimeout(() => {
            objRefs['label_win'].show = true
          }, 500)
          setTimeout(() => {
            gotoNextLevel()
          }, 4000)
        }
      }
    }
  }
  return image
})

registerClass('hint_button', () => {
  const button = createButton(vec2(1500, 300), vec2(3, 3), 0, { horizontal: 'end', vertical: 'end' }, 'show hint', () => {
    const hint = objRefs['hint_label']
    if (!hint.shown) {
      hint.scale = vec2(2, 2)
      button.component.textContent = 'hide hint'
      hint.shown = true
    }
    else {
      hint.scale = vec2(0, 0)
      button.component.textContent = 'show hint'
      hint.shown = false
    }
  })

  return button
})

registerClass('memory_win_label', () => {
  const label = registeredClasses['colored_label'](
    vec2(800, 900),
    vec2(0, 0),
    0,
    {horizontal: 'center', vertical: 'start'},
    'IMPRESSIVE',
    'rgb(150, 150, 255)'
  )
  label.show = false

  label.update = (delta) => {
    if (!label.show) {
      return
    }

    label.position = vec2(800, Math.max(500, label.position.y - delta * 400))
    label.scale = vec2(Math.min(7, label.scale.x + delta * 7), Math.min(4, label.scale.x + delta * 4))
  }

  return label
})

registerClass('card_revealed', (position, back) => {
  const image = createImage(position, vec2(0, 1), 0, {horizontal: 'center', vertical: 'center'}, 'card_1', () => {
    revealed = true
  })

  image.update = (delta) => {
    _cardRotate(image)
    if (objRefs[back].fullyRevealed) {
      image.scale = vec2(Math.min(image.scale.x + delta * 4, 1), 1)
    }
  }

  return image
})

const LEVEL_MEMORY = () => [
  [
    'background',
    [{
      backgroundColor: 'green',
    }]
  ],

  [
    'card_covered',
    [
      vec2(550, 450),
    ],
    'cardrev_left'
  ],
  [
    'card_revealed',
    [
      vec2(550, 450),
      'cardrev_left'
    ],
  ],

  [
    'card_covered',
    [
      vec2(1600-550, 450),
    ],
    'cardrev_right'
  ],
  [
    'card_revealed',
    [
      vec2(1600-550, 450),
      'cardrev_right'
    ],
  ],

  [
    'colored_label',
    [
      vec2(800, 150),
      vec2(6, 4),
      0,
      {horizontal: 'center', vertical: 'start'},
      'MEMORY',
      'rgb(255, 150, 150)'
    ]
  ],
  [
    'memory_win_label',
    [],
    'label_win'
  ],
  ['hint_button', []],
  [
    'colored_label',
    [
      vec2(1500, 300),
      vec2(2, 0),
      0,
      {horizontal: 'end', vertical: 'start'},
      memoryHint,
      'white'
    ],
    'hint_label'
  ],
]

const memoryHint = `
  You can use a paper sheet to take<br/>
  not of the cards you've previously revealed!
`
