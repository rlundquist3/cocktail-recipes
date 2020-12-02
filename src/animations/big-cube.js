import Zdog from 'zdog';

export default (parent) => (
  new Zdog.Box({
    addTo: parent,
    width: 45,
    height: 45,
    depth: 45,
    stroke: 1,
    color: '#ffffffbb',
    translate: { z: 1 },
    rotate: { x: Zdog.TAU/20 }
  })
)
