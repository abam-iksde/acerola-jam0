function trimKey(str='') {
  if (str === ' ') {
    return str
  }
  return str.trim()
}

const isKeyDown = (() => {
  const keysDown = {}

  window.addEventListener('keydown', (event) => {
    keysDown[trimKey(event.key).toLowerCase()] = true
  })
  window.addEventListener('keyup', (event) => {
    keysDown[trimKey(event.key).toLowerCase()] = false
  })

  return (key) => {
    if (trimKey(key).toLowerCase() === 'space') [
      key = ' '
    ]
    return !!keysDown[trimKey(key).toLowerCase()]
  }
})()
