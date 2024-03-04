registerClass('colored_label', (position, scale, rotation, alignment, text, color) => {
  const label = createLabel(position, scale, rotation, alignment, text)
  assignStyle(label.component, {
    color: color,
  })
  return label
})
