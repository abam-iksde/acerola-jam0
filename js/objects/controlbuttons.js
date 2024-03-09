registerClass('button_back_to_menu', () => {
  return createButton(
    vec2(1600, 0),
    vec2(1.5, 1.5),
    0,
    {horizontal: 'end', vertical: 'start'},
    'QUIT TO MENU',
    () => gotoLevel(0)
  )
})

registerClass('button_restart_level', () => {
  return createButton(
    vec2(1500, 0),
    vec2(1.5, 1.5),
    0,
    {horizontal: 'end', vertical: 'start'},
    'RESTART LEVEL',
    reloadScene
  )
})

registerClass('control_buttons_background', () => {
  return createDiv(
    vec2(1600, 0),
    vec2(1, 1),
    0,
    {horizontal: 'end', vertical: 'start'},
    vec2(230, 100),
    { backgroundColor: 'rgba(50, 50, 150, 0.3)' }
  )
})

const controlSet = [
  ['control_buttons_background', []],
  ['button_back_to_menu', []],
  ['button_restart_level', []],
]
