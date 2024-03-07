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
  'target': 'graphics/target.png',
  'card_reverse': 'graphics/card_reverse.png',
  'card_1': 'graphics/card_1.png',
  'platform': 'graphics/platform.png',
  'background_lv2': 'graphics/background_lv2.png',
  'level_slider': 'graphics/level_slider.png',
}

let images
