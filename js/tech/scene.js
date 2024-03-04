const registeredClasses = {}

let objRefs = {}

let walls = []

let currentScene

function loadScene(scene) {
  currentScene = scene

  objects.forEach((object) => {
    if (object.destroy) {
      object.destroy()
    }
    if (object.component) {
      object.component.remove()
    }
  })

  objRefs = {}
  walls = []

  objects = scene().map((obj) => {
    const result = registeredClasses[obj[0]](...obj[1])
    if (obj.length > 2) {
      objRefs[obj[2]] = result
    }
    return result
  })
}

function reloadScene() {
  loadScene(currentScene)
}

function registerClass(name, constructor) {
  registeredClasses[name] = constructor
}

function testCollision(pos1, size1, pos2, size2) {
  return (
    pos1.x < pos2.x + size2.x
    && pos1.x + size1.x >= pos2.x
    && pos1.y < pos2.y + size2.y
    && pos1.y + size1.y >= pos2.y
  )
}

function testWallCollision(pos, size) {
  return walls.some((wall) => {
    return testCollision(wall.position, wall.size, pos, size)
  })
}

registerClass('image', createImage)
registerClass('rawImage', createImageWithRawSource)
registerClass('textfield', createTextfield)
