async function loadImages(map) {
  const promises = Object.entries(map).reduce((all, [name, path]) => {
    const loadPromise = new Promise((resolve) => {
      const result = new Image()
      result.onload = () => {
        resolve(result)
      }
      result.src = path
    })
    return {
      ...all,
      [name]: loadPromise
    }
  }, {})

  for (const entry in Object.entries(promises)) {
    promises[entry[0]] = await promises[entry[1]]
  }

  return promises
}

const imageMap = {
  'player': 'graphics/player.png',
  'floor_lv1': 'graphics/floor_lv1.png',
  'target': 'graphics/target.png'
}

let images