registerClass('outsourcedImage', (...args) => {
  const textfield = objRefs['imagepath']
  let src = textfield.component.value
  const result = createImageWithRawSource(...args, src)
  result.update = () => {
    if (textfield.component.value == src) {
      return
    }
    src = textfield.component.value
    result.component.src = src
  }
  return result
})
