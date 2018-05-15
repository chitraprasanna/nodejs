function printString(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log(str)
                resolve()
            },
            //   3000
            Math.floor(Math.random() * 100) + 1000
        )
    })
}

/*
 simplified then() version

 function printAll() {
 printString("A")
 .then(() => printString("B"))
 .then(() => printString("C"))
 .catch((err) => console.error(err))
 }
 */

function printAll() {
    printString("A")
        .then(() => printString("B"))
        .then(() => printString("C"))
        .catch((err) => console.error(err))
}


//printAll()

async function printAll() {
    await printString("A")
    await printString("B")
    await printString("C")
}

function addString(prev, current){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
                resolve(prev +' ' + current);
            },
            Math.floor(Math.random() * 100) + 500
        )
    })
}

/*
 simplified then() version
function addAll(){
    addString('','A')
        .then(result=> addString(result, 'B'))
        .then(result=> addString(result, 'C'))
        .then(result => {console.log(result)});
}
*/

async function addAll(){
    let str = ''
    str = await addString('','A')
    str = await addString(str, 'B')
    str = await addString(str, 'C')
    console.log(str);
}

addAll()