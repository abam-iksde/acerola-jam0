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

function createButton(position, scale, rotation, alignment, text) {
  const component = document.createElement('button')
  component.textContent = text

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createLabel(position, scale, rotation, alignment, text) {
  const component = document.createElement('span')
  component.innerHTML = text

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createImageWithRawSource(position, scale, rotation, alignment, src) {
  const component = document.createElement('img')
  component.src = src

  return createNodeWith(position, scale, rotation, alignment, component)
}

function createImage(position, scale, rotation, alignment, image) {
  return createImageWithRawSource(position, scale, rotation, alignment, imageMap[image])
}

function createTextfield(position, scale, rotation, alignment, defaultValue, onChange=undefined, changeOnStart=false) {
  const component = document.createElement('input')
  component.type = 'text'
  component.value = defaultValue

  if (onChange) {
    component.onchange = (event) => onChange(event.target.value)
    changeOnStart && onChange(defaultValue)
  }

  return createNodeWith(position, scale, rotation, alignment, component)
}
