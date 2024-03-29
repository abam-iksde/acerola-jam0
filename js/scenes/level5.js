function LEVEL5() {
  level5lost = false
  wallGroupsEnabled = { red: true, green: false, blue: false }
  return [
    [
      'background',
      [{
        backgroundImage: 'url("graphics/cubses.png")',
        backgroundRepeat: 'repeat',
      }]
    ],
    
    [
      'player',
      [
        vec2(32, 700),
        vec2(1, 1),
        0,
        {vertical: 'start', horizontal: 'start'},
      ],
      'player'
    ],
    
    [
      'styled_wall',
      [
        vec2(0,800),
        vec2(1600, 100),
        [255, 0, 0],
        'red'
      ]
    ],
    
    [
      'styled_wall',
      [
        vec2(1000,700),
        vec2(600, 100),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(1000,600),
        vec2(600, 100),
        [255, 0, 0],
        'red'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(700, 500),
        vec2(600, 50),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(0, 500),
        vec2(400, 100),
        [255, 0, 0],
        'red'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(0, 400),
        vec2(400, 100),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'styled_wall',
      [
        vec2(300, 0),
        vec2(100, 400),
        [0, 255, 0],
        'green'
      ]
    ],

    [
      'target',
      [
        vec2(64, 200),
      ]
    ],

    [
      'image',
      [
        vec2(1000, 140),
        vec2(1.5, 1.5),
        0,
        {vertical: 'start', horizontal: 'end'},
        'arrow'
      ]
    ],
    
    [
      'checkbox',
      [
        vec2(1000, 80),
        vec2(5, 5),
        0,
        {vertical: 'start', horizontal: 'start'},
        true,
        (checked) => {
          if (level5lost) {
            return
          }
          playSound('switch')
          wallGroupsEnabled.red = checked
          wallGroupsEnabled.green = !checked
        }
      ]
    ],
    ...controlSet,
  ]
}

let level5lost
let wallGroupsEnabled

registerClass('styled_wall', (position, size, color, group) => {
  let enabled = wallGroupsEnabled[group]
  const cssColor = (enabled) => {
    const [r, g, b] = color
    return `rgba(${r}, ${g}, ${b}, ${enabled ? 1.0 : 0.5})`
  }
  const div = createDiv(position, vec2(1, 1), 0, {horizontal: 'start', vertical: 'start'}, size, {
    backgroundColor: cssColor(enabled)
  })
    
  const wall = enabled ? {
    position,
    size,
  }: { position: vec2(0, 0), size: vec2(0, 0) }
  
  walls.push(wall)
  
  div.update = () => {
    if (wallGroupsEnabled[group] === enabled) {
      return
    }
    enabled = wallGroupsEnabled[group]
    assignStyle(div.component, {
      backgroundColor: cssColor(enabled)
    })
    wall.position = enabled ? position : vec2(0, 0)
    wall.size = enabled ? size : vec2(0, 0)
    if (enabled) {
      const { player } = objRefs
      if (!player) {
        return
      }
      if (level5lost) {
        return
      }
      if (testCollision(position, size, player.position, vec2(64, 64))) {
        level5lost = true
        player.disabled = true
        // PLAY DEATH SOUND
        playSound('death')
        setTimeout(reloadScene, 1000)
      }
    }
  }
  
  return div
})
