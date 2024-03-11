function LEVEL_STORY() {
  return [
    [
      'background',
      [{
        backgroundImage: 'url("graphics/crack.png")',
        backgroundRepeat: 'repeat',
      }]
    ],
    [
      'colored_label',
      [
        vec2(800, 100),
        vec2(3, 3),
        0,
        {horizontal: 'center', vertical: 'start'},
        'Dom in the land of DOM',
        'white',
      ]
    ],
    [
      'div',
      [
        vec2(800, 250),
        vec2(1, 1),
        0,
        {horizontal: 'center', vertical: 'start'},
        vec2(800, 550),
        {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
        },
        storyContent,
      ]
    ],
    ['button_back_to_menu', []],
  ]
}

const storyContent = `
  <span style="font-size: 32px;">
    Help Dom as he fearlessly traverses the DOM in order to save his family.
  </span>
`
