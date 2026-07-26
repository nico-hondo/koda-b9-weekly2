export default function triangle(num){

    if(typeof num !== "number" || num < 1){
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
        // Number(num)
    }
    
    for(let i = 1; i <= num; i++){
        let output = '';
        for(let j = 1; j <= i; j++){
            output += j;
        }
        console.log(output);
    }
}