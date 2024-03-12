const LEVEL_LAST = () => [
  [
    'background',
    [{
      backgroundImage: 'url("graphics/background_credits.png")',
      backgroundRepeat: 'repeat',
    }]
  ],

  [
    'win_label',
    [
      vec2(800, 200),
      vec2(1, 1),
      0,
      {horizontal: 'center', vertical: 'center'},
      'You win!',
      'white'
    ]
  ],
  [
    'image',
    [
      vec2(800, 550),
      vec2(1, 1),
      0,
      {horizontal: 'center', vertical: 'start'},
      'torpedo_family',
    ]
  ],
  [
    'credits_div',
    [
      vec2(800, 450),
      vec2(4, 4),
      0,
      {horizontal: 'center', vertical: 'center'},
      vec2(300, 40),
      {backgroundColor: 'rgb(150,150,150)', overflowY: 'scroll'},
      credits
    ]
  ],
  ['button_back_to_menu', []],
]

registerClass('credits_div', (...args) => {
  const div = createDiv(...args)
  setTimeout(() => div.component.scrollTo({left: 0, top: div.component.scrollHeight, behavior: 'smooth'}), 1000)
  return div
})

registerClass('win_label', (...args) => {
  const label = registeredClasses.colored_label(...args)

  label.update = () => {
    const time = performance.now()/1000
    label.scale = vec2((1.0 + Math.sin(time)*0.1) * 7, (1.0 + Math.cos(time*1.3) * 0.05) * 7)
    label.rotation = Math.sin(time * 0.9) * 5
  }

  return label
})

const credits = `
  <span style="font-size: 32px; color: green;"> CREDITS: </span><br/>
  <span style="color: rgb(40, 40, 40);"> game: <span style="color: red;">bobby popcorn</span> </span>
`
