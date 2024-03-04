const isKeyDown = (() => {
  const keysDown = {}

  window.addEventListener('keydown', (event) => {
    keysDown[event.key] = true
  })
  window.addEventListener('keyup', (event) => {
    keysDown[event.key] = false
  })

  return (key) => {
    return !!keysDown[key]
  }
})()
