const levels = [
  LEVEL_MENU,
  LEVEL1,
  LEVEL2,
  LEVEL_MEMORY,
  LEVEL3,
  LEVEL4,
  LEVEL5,
  LEVEL6,
  LEVEL_BIG_CHALLENGE,
  LEVEL_LAST,

  LEVEL_STORY,
]

function loadingLabel(...args) {
  const label = createLabel(...args, 'Loading')
  assignStyle(label.component, {
    color: 'white'
  })

  let loaded = false

  loadImages(imageMap).then((result) => {
    images = result
    loaded = true
  })

  let animationState = 0

  const timer = setInterval(() => {
    animationState = (animationState + 1) % 3
    label.component.textContent = `Loading${Array.from({length: animationState}).fill('.').join('')}`
    label._recalcTransform()
  }, 100)

  label.update = () => {
    loaded && canvasInitialized && (clearInterval(timer), loadScene(levels[0]))
  }

  return label
}

registerClass('loadingLabel', loadingLabel)

loadScene(() => [
  ['loadingLabel', [vec2(10, 10), vec2(3, 3), 0, {horizontal: 'start', vertical: 'start'}]]
])

const [getLevelIndex, gotoLevel, gotoNextLevel] = (() => {
  let levelIndex = 0
  let gotoLevel = ((index) => {
    levelIndex = index
    loadScene(levels[index])
    levelsUnlocked[index] = true
  })
  return [(() => levelIndex), gotoLevel, () => gotoLevel(levelIndex+1)]
})()
