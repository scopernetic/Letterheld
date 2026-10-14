export function createStore(storage=globalThis.localStorage){
  const memory=new Map(); let available=false;
  try{const k='__letterheld_probe__';storage?.setItem(k,'1');storage?.removeItem(k);available=true}catch{}
  return {available,get(key,fallback=null){try{if(available){const v=storage.getItem(key);return v===null?fallback:v}}catch{}return memory.has(key)?memory.get(key):fallback},set(key,value){const text=String(value);try{if(available){storage.setItem(key,text);return true}}catch{}memory.set(key,text);return false},remove(key){try{if(available)storage.removeItem(key)}catch{}memory.delete(key)},reset(prefix='letterheld'){if(available){try{const keys=[];for(let i=0;i<storage.length;i++){const k=storage.key(i);if(k?.startsWith(prefix))keys.push(k)}keys.forEach(k=>storage.removeItem(k));return}catch{}}[...memory.keys()].filter(k=>k.startsWith(prefix)).forEach(k=>memory.delete(k))}};
}
