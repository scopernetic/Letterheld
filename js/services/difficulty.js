import {LEVELS} from './profile.js';
export const LABELS={inherit:'Volg algemeen',easy:'Rustig',normal:'Gewoon',hard:'Uitdagend',expert:'Heel uitdagend'};
export const PARAMS={
 letters:{easy:{choices:2},normal:{choices:3},hard:{choices:4},expert:{choices:6}},
 numbers:{easy:{maxNumber:10,choices:2},normal:{maxNumber:20,choices:3},hard:{maxNumber:50,choices:4},expert:{maxNumber:100,choices:6}},
 math:{easy:{maxNumber:10,choices:3,visual:true},normal:{maxNumber:20,choices:4,visual:true},hard:{maxNumber:50,choices:4,visual:false},expert:{maxNumber:100,choices:6,visual:false}},
 'multiply-divide':{easy:{maxFactor:2,choices:2,visual:true},normal:{maxFactor:5,choices:3,visual:true},hard:{maxFactor:10,choices:4,visual:false},expert:{maxFactor:12,choices:6,visual:false}},
 words:{easy:{lengths:[3],choices:2,patterns:[]},normal:{lengths:[3,4],choices:3,patterns:[]},hard:{lengths:[4,5],choices:4,patterns:['ng','nk']},expert:{lengths:[3,4,5,6],choices:6,patterns:['ng','nk']}}
};
export function resolveDifficulty(profile,moduleId){const global=LEVELS.includes(profile.settings?.globalDifficulty)?profile.settings.globalDifficulty:'normal';const value=profile.settings?.moduleDifficulties?.[moduleId];const level=LEVELS.includes(value)?value:global;return{level,source:LEVELS.includes(value)?'module':'global',params:{...(PARAMS[moduleId]?.[level]||{})}}}
export function setGlobal(profileService,level){if(!LEVELS.includes(level))throw new Error('Ongeldig niveau');profileService.update(p=>p.settings.globalDifficulty=level)}
export function setModule(profileService,id,level){if(!['inherit',...LEVELS].includes(level))throw new Error('Ongeldig moduleniveau');profileService.update(p=>p.settings.moduleDifficulties[id]=level)}
