let musicPlaying = false

registerClass('button_music_on', (position, scale, textOn, textOff) => {
  let button
  button = createButton(position, scale, 0, {horizontal: 'start', vertical: 'start'}, sounds.music.muted ? textOff : textOn, () => {
    if (!musicPlaying) {
      sounds.music.play()
      musicPlaying = true
    }
    sounds.music.muted = !sounds.music.muted
    button.component.textContent = sounds.music.muted ? textOff : textOn
    button._recalcTransform()
  }, false)

  return button
})
