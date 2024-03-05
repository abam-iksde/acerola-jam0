registerClass('textarea_wall', (position, scale, ...rest) => {
  const textarea = createTextArea(position, scale, ...rest)

  const wall = {
    position: position,
    size: vec2(textarea.component.clientWidth * scale.x, textarea.component.clientHeight * scale.y)
  }
  walls.push(wall)

  const _update = textarea.update
  textarea.update = () => {
    _update()
    wall.size = vec2(textarea.component.clientWidth * scale.x, textarea.component.clientHeight * scale.y)
  }

  return textarea
})
