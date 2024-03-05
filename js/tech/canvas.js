function assignStyle(element, style) {
  Object.entries(style).forEach(([key, value]) => {
    element.style[key] = value
  })
}

const containerDiv = document.getElementById('container_div')
assignStyle(containerDiv, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
})

const gameDiv = document.createElement('div')
containerDiv.appendChild(gameDiv)

let renderWidth = 1600
let renderHeight = 900

let canvasInitialized = false

const controlSize = (() => {
  let _stretchMode = 0
  let _renderWidth = 0
  let _renderHeight = 0
  let _containerWidth = 0
  let _containerHeight = 0
  let _surpass = false

  setTimeout(() => _surpass = true, 1000)

  return () => {
    const aspect = containerDiv.clientWidth / containerDiv.clientHeight
    const stretchMode = (aspect < renderWidth / renderHeight)
    if (
      _stretchMode !== stretchMode
      || _renderWidth !== renderWidth
      || _renderHeight !== renderHeight
      || _containerWidth !== containerDiv.clientWidth
      || _containerHeight !== containerDiv.clientHeight
      || _surpass) {
      _stretchMode = stretchMode
      _renderWidth = renderWidth
      _renderHeight = renderHeight
      _containerWidth = containerDiv.clientWidth
      _containerHeight = containerDiv.clientHeight
      if (_surpass) {
        canvasInitialized = true
      }
      _surpass = false
    }
    else {
      return
    }
    const style = stretchMode
      ? {
          width: '100%',
          height: 'auto',
        }
      : {
          width: 'auto',
          height: '100%',
        }

    assignStyle(gameDiv, {
      aspectRatio: `${renderWidth} / ${renderHeight}`,
      backgroundColor: 'blue',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    })

    objects.forEach((object) => {
      object._recalcTransform()
    })
  }
})()
