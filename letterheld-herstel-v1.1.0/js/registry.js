import letters from '../modules/letters/module.js';import numbers from '../modules/numbers/module.js';import math from '../modules/math/module.js';import multiplyDivide from '../modules/multiply-divide/module.js';import words from '../modules/words/module.js';import shop from '../modules/shop/module.js';import fun from '../modules/fun/module.js';
const modules=[letters,numbers,math,multiplyDivide,words,shop,fun];
export const registry=new Map(modules.map(m=>[m.id,m]));
export function getModule(id){return registry.get(id)||null}export function listModules(){return [...registry.values()]}
