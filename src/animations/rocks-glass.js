import Zdog from 'zdog';

export default (parent) => {
  const rocksGlass = new Zdog.Cylinder({
    addTo: parent,
    diameter: 80,
    length: 80,
    stroke: 3,
    color: '#ffffff50',
    backface: 'transparent',
    rotate: { x: Zdog.TAU/4 }
  });

  const glassBase = new Zdog.Cylinder({
    addTo: rocksGlass,
    diameter: 80,
    translate: { z: -36 },
    length: 18,
    color: '#ffffffcc',
  });

  return rocksGlass;
}
