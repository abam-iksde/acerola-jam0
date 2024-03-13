const isKeyDown = (() => {
  const keysDown = {}

  function trim(str) {
    if (str === ' ') {
      return str
    }
    return str.trim()
  }

  window.addEventListener('keydown', (event) => {
    keysDown[trim(event.key).toLowerCase()] = true
  })
  window.addEventListener('keyup', (event) => {
    keysDown[trim(event.key).toLowerCase()] = false
  })

  return (key) => {
    if (trim(key).toLowerCase() === 'space') [
      key = ' '
    ]
    return !!keysDown[trim(key).toLowerCase()]
  }
})()
