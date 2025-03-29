export function getrandomString(){
    const input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let str = ''
    for(let i = 0; i < 10; i++){
        const randomNum = input[(Math.floor(Math.random() * 62) % 62)];
        str += randomNum;
    }
    console.log(str);
    return str
}