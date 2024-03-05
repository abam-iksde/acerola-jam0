registerClass('target', (position) => {
  const target = createImage(position, vec2(1,1), 0, {horizontal: 'center', vertical: 'center'}, 'target')
  target.update = () => {
    const time = performance.now()/1000
    target.scale = vec2(1.0 + Math.sin(time*4)*0.1, 1.0 + Math.cos(time*4)*0.1)
    target.rotation = Math.cos(time*5)*10
    if (testCollision(
      vec2(target.position.x - 32, target.position.y - 32), vec2(64, 64),
      objRefs.player.position, vec2(64, 64)
    )) {
      gotoNextLevel()
    }
  }
  return target
})
