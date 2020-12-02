import Zdog from 'zdog';

export default (parent) => (
  new Zdog.Shape({
    addTo: parent,
    path: [
      { x: -35, y: -35, z: 16 },
      { bezier: [
        { x:  20, y: -35 },
        { x:  20, y:  60 },
        { x:  10, y:  10, z: -4 },
      ]},
    ],
    stroke: 5,
    fill: true,
    color: '#eb9020',
    translate: { z: 30 },
    rotate: { z: Zdog.TAU/2 }
  })
)
