let objects = []

const physicsLoop = (() => {
  let timeNow = performance.now()
  let timeThen
  return async () => {
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

async function renderLoop() {
  controlSize()
  for (const object of objects) {
    if (object.draw) {
      await object.draw()
    }
  }
  requestAnimationFrame(renderLoop)
}

setInterval(physicsLoop, 16)
renderLoop()
