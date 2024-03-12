async function loadSounds(map) {
  const promises = Object.entries(map).reduce((all, [name, path]) => {
    const loadPromise = new Promise((resolve) => {
      const result = new Audio(path)
      result.addEventListener('canplaythrough', () => {
        resolve(result)
     }, false)
    })
    return {
      ...all,
      [name]: loadPromise
    }
  }, {})

  for (const entry of Object.entries(promises)) {
    promises[entry[0]] = await entry[1]
  }

  return promises
}

const soundMap = {
  'death': 'sounds/death.wav',
  'music': 'sounds/family2.wav',
}

let sounds

function playSound(name) {
  sounds[name].play()
}
