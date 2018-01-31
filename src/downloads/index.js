const basenames = [
  'mesicon-automation',
  'mesicon-equip-cd',
  'mesicon-equip-lrp',
  'mesicon-equip-mainline',
  'mesicon-equip-ohp',
  'mesicon-equip-reloc-crusher',
  'mesicon-equip-shuttle',
  'mesicon-equip-sl',
  'mesicon-equip-stk',
  'mesicon-equip-tlo-1',
  'mesicon-equip-tlo-2',
  'mesicon-grid',
  'mesicon-inflow',
  'mesicon-outflow',
  'mesicon-stockpile',
  'mesicon-stockpiles',
  'mesicon-train',
  'mesicon-truck',
  'mesicon-vessel',
  'rake',
];

export default {
  light: basenames.map(name => ({
    name: `${name}.svg`,
    src: require(`./${name}-light.svg`)
  })),
  dark: basenames.map(name => ({
    name: `${name}.svg`,
    src: require(`./${name}-dark.svg`)
  })),
};