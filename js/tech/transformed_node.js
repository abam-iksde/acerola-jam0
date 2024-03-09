const vec2 = (x, y) => ({x, y})
const alignment = (horizontal, vertical) => ({vertical, horizontal})

class TransformedNode {
  constructor(position, scale, rotation, alignment) {
    this._position = position
    this._scale = scale
    this._rotation = rotation
    this._alignment = alignment
    this._component = undefined
  }

  get position() {
    return this._position
  }

  set position(value) {
    this._position = value
    this._recalcTransform()
  }

  get scale() {
    return this._scale
  }

  set scale(value) {
    this._scale = value
    this._recalcTransform()
  }

  get rotation() {
    return this._rotation
  }

  set rotation(value) {
    this._rotation = value
    this._recalcTransform()
  }

  get alignment() {
    return this._alignment
  }

  set alignment(value) {
    this._alignment = value
    this._recalcTransform()
  }

  get component() {
    return this._component
  }

  set component(value) {
    this._component = value
    this._recalcTransform()
  }

  _recalcTransform() {
    if (!this.component) {
      return
    }

    const scaleX = this.scale.x * gameDiv.clientWidth/renderWidth
    const scaleY = this.scale.y * gameDiv.clientHeight/renderHeight

    const scaleMarginX = (this.component.clientWidth - scaleX * this.component.clientWidth)/2
    const scaleMarginY = (this.component.clientHeight - scaleY * this.component.clientHeight)/2

    const translateX = {
      center: -this.component.clientWidth/2,
      start: -scaleMarginX,
      end: -this.component.clientWidth + scaleMarginX
    }[this.alignment.horizontal]

    const translateY = {
      center: -this.component.clientHeight/2,
      start: -scaleMarginY,
      end: -this.component.clientHeight + scaleMarginY,
    }[this.alignment.vertical]

    assignStyle(this.component, {
      position: 'absolute',
      left: `${Math.floor(this.position.x / renderWidth * gameDiv.clientWidth)}px`,
      top: `${Math.floor(this.position.y / renderHeight * gameDiv.clientHeight)}px`,
      transform: `
        translate(${translateX}px, ${translateY}px)
        scale(
          ${scaleX},
          ${scaleY})
        rotate(${this.rotation}deg)
      `,
    })
  }
}

function createNodeWith(position, scale, rotation, alignment, component) {
  const result = new TransformedNode(position, scale, rotation, alignment)
  result.component = component
  gameDiv.appendChild(result.component)
  result._recalcTransform()
  return result
}

function createButton(position, scale, rotation, alignment, text, onClick=undefined) {
  const component = document.createElement('button')
  component.textContent = text
  onClick && (component.onclick = onClick)

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createLabel(position, scale, rotation, alignment, text) {
  const component = document.createElement('span')
  component.innerHTML = text

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createImageWithRawSource(position, scale, rotation, alignment, src, onClick=undefined) {
  const component = document.createElement('img')
  component.src = src

  onClick && (component.onclick = onClick)

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createImage(position, scale, rotation, alignment, image, onClick=undefined) {
  return createImageWithRawSource(position, scale, rotation, alignment, imageMap[image], onClick)
}

function createTextfield(position, scale, rotation, alignment, defaultValue, onChange=undefined, changeOnStart=false, width=undefined) {
  const component = document.createElement('input')
  component.type = 'text'
  component.value = defaultValue

  if (width !== undefined) {
    assignStyle(component, {
      width: `${width}px`
    })
  }

  if (onChange) {
    component.onchange = (event) => onChange(event.target.value)
    changeOnStart && onChange(defaultValue)
  }

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createBackground(style) {
  const component = document.createElement('div')
  assignStyle(component, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    ...style
  })

  gameDiv.appendChild(component)

  return {
    component,
    _recalcTransform: () => {}
  }
}

function createTextArea(position, scale, rotation, alignment, size, defaultValue, onChange=undefined, changeOnStart=false) {
  const component = document.createElement('textarea')

  component.value = defaultValue
  component.cols = size.x
  component.rows = size.y
  if (onChange) {
    changeOnStart && onChange(defaultValue)
    component.onchange((event) => {
      onChange(event.target.value)
    })
  }

  const result = createNodeWith(position, scale, rotation, alignment, component)
  let width = component.clientWidth
  let height = component.clientHeight
  result.update = () => {
    if (component.clientWidth !== width || component.clientHeight !== height) {
      result._recalcTransform()
    }
  }
  return result
}

function createSlider(position, scale, rotation, alignment, valueRange, defaultValue, onChange=undefined, changeOnStart=false) {
  const component = document.createElement('input')
  component.type = 'range'
  component.min = valueRange.x
  component.max = valueRange.y
  component.value = defaultValue
  
  if (onChange) {
    component.onchange = (event) => onChange(event.target.value)
    changeOnStart && onChange(defaultValue)
  }
  
  return createNodeWith(position, scale, rotation, alignment, component)
}

function createDiv(position, scale, rotation, alignment, size={}, style='', htmlContent='') {
  const component = document.createElement('div')
  assignStyle(component, {
    ...style,
    width: `${size.x}px`,
    height: `${size.y}px`,
  })
  component.innerHTML = htmlContent
  
  return createNodeWith(position, scale, rotation, alignment, component)
}

function createCheckbox(position, scale, rotation, alignment, checked, onChange = undefined, changeOnStart = false) {
  const component = document.createElement('input')
  component.type = 'checkbox'
  component.checked = checked
  
  if (onChange) {
    component.onchange = (event) => onChange(event.target.checked)
    if (changeOnStart) {
      onChange(checked)
    }
  }
  
  return createNodeWith(position, scale, rotation, alignment, component)
}
