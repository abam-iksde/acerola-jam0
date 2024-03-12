const controls = {
  jump: 'ArrowUp',
  left: 'ArrowLeft',
  right: 'ArrowRight',
}

registerClass('player', (position, scale, ...args) => {
  const player = createImage(position, vec2(scale.x * (64/200), scale.y * (64/270)), ...args, 'player')
  const gravity = 512.0
  player.vSpeed = 0
  player.onFloor = false
  player.movementAccumulator = vec2(0, 0)
  player.disabled = false
  objRefs.player = player
  player.update = (delta) => {
    if (player.disabled) {
      return
    }
    const horizontalInput = +isKeyDown(controls.right) - +isKeyDown(controls.left)
    const jumpInput = +isKeyDown(controls.jump)

    player.vSpeed += gravity * delta

    player.movementAccumulator = vec2(
      player.movementAccumulator.x + horizontalInput * delta * 256,
      player.movementAccumulator.y + player.vSpeed * delta
    )

    const position = player.position

    while (Math.abs(player.movementAccumulator.x) >= 1) {
      const signed = Math.sign(player.movementAccumulator.x)
      player.component.src = signed > 0 ? imageMap.player : imageMap.player_left
      if (testWallCollision(vec2(position.x + signed, position.y), vec2(64, 64))) {
        player.movementAccumulator.x = 0
        break
      }

      player.movementAccumulator.x -= signed
      position.x += signed
    }

    while (player.movementAccumulator.y >= 1) {
      if (testWallCollision(vec2(position.x, position.y + 1), vec2(64, 64))) {
        player.movementAccumulator.y = 0
        player.vSpeed = 0
        break
      }

      player.movementAccumulator.y -= 1
      position.y += 1
    }

    while (player.movementAccumulator.y <= -1) {
      if (testWallCollision(vec2(position.x, position.y - 1), vec2(64, 64))) {
        player.movementAccumulator.y = 0
        player.vSpeed = 0
        break
      }

      player.movementAccumulator.y += 1
      position.y -= 1
    }

    player.position = position

    player.onFloor = testWallCollision(vec2(position.x, position.y + 1), vec2(64, 64))

    if (player.onFloor) {
      player.vSpeed = -400 * +jumpInput
      if (jumpInput) {
        playSound('jump')
      }
    }

    if (player.position.y > 900) {
      playSound('fall')
      reloadScene()
    }
  }
  return player
})
