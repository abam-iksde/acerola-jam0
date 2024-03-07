const levels = [
  LEVEL1,
  LEVEL2,
  LEVEL_MEMORY,
  LEVEL3,
  LEVEL4,
  LEVEL_LAST,
]

function loadingLabel(...args) {
  const label = createLabel(...args, 'Loading...')
  assignStyle(label.component, {
    color: 'white'
  })

  let loaded = false

  loadImages(imageMap).then((result) => {
    images = result
    loaded = true
  })

  label.update = () => {
    loaded && canvasInitialized && loadScene(levels[0])
  }

  return label
}

registerClass('loadingLabel', loadingLabel)

loadScene(() => [
  ['loadingLabel', [vec2(10, 10), vec2(3, 3), 0, {horizontal: 'start', vertical: 'start'}]]
])

const [getLevelIndex, gotoNextLevel] = (() => {
  let levelIndex = 0
  return [(() => levelIndex), (() => loadScene(levels[++levelIndex]))]
})()
