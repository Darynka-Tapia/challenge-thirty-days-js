/* Pasar esto a promesas 
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}

*/

function doTask1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 1')
        }, 300)
    })
}
  
function doTask2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2')
        }, 300)
    })
}
  
function doTask3() {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Task 3')
        }, 300)
    })
}
  

async function runCode() {
    const strings = [];
    let result1 = await doTask1();
    strings.push(result1);
    let result2 = await doTask2();
    strings.push(result2);
    let result3 = await doTask3();
    strings.push(result3);
    return strings
}

runCode()
.then(response => console.log(response));