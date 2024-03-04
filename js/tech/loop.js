let objects = []

const gameLoop = (() => {
  let timeNow = performance.now()
  let timeThen
  return async () => {
    controlSize()
    timeThen = timeNow
    timeNow = performance.now()
    const delta = (timeNow - timeThen) / 1000
    for (const object of objects) {
      if (object.update) {
        await object.update(delta)
      }
    }
  }
})()

setInterval(gameLoop, 16)
