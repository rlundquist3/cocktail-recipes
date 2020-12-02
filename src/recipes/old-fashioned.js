import Zdog from 'zdog';
import rocksGlass from '../animations/rocks-glass';
import bigCube from '../animations/big-cube'
import orangePeel from '../animations/orange-peel'

const animation = (rocksGlass) => {
  let liquid, ice, orange;

  setTimeout(() => {
    liquid = new Zdog.Cylinder({
      addTo: rocksGlass,
      diameter: 80,
      translate: { z: -4 },
      length: 50,
      color: '#e3925fcd',
    });
  }, 2000);

  setTimeout(() => {
    ice = bigCube(rocksGlass);
  }, 4000);

  setTimeout(() => {
    orange = orangePeel(rocksGlass);
  }, 6000);
}

const recipe = {
  name: 'Old Fashioned',
  type: 'classic',
  spirit: 'bourbon or rye',
  vessel: rocksGlass,
  recommended: [],
  ingredients: [
    {
      name: 'bourbon',
      quantity: 2,
      unit: 'oz',
    },
    {
      name: 'aromatic bitters',
      quantity: 3,
      unit: 'dashes',
    },
    {
      name: 'sugar',
      quantity: 1,
      unit: 'cube',
    },
    {
      name: 'ice',
      quantity: 1,
      unit: 'large cube',
    },
    {
      name: 'orange peel',
      quantity: 1,
    },
  ],
  directions: [
    'muddle sugar, bitters, and a splash of bourbon in a rocks glass',
    'add bourbon and stir',
    'add ice and stir some more',
    'peel orange over the glass, twist, rub the rim with the peel and add to glass'
  ]
}

export { animation, recipe }
