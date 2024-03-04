registerClass('image_wall', (...args) => {
  const image = createImage(...args)

  image.size = args[args.length-1]

  walls.push(image)

  return image
})
