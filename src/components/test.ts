let str: string = 'text';

console.log(str);

const a = async () => {
    console.log('arrow')
    return await new Promise((resolve: any, reject: any) => { resolve('ook') })
}

[12].find(item => item === 0)

for (const iterator of ['a', 'b']) {
    console.log(iterator)
}

const tm = { d: 1 };
let b:any = { ...tm };
let c = {...b};

export {
    str,
    c
}
