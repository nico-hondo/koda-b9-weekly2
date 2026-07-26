export default function processNumbers(arr){
    let output = 1;

    for(let i = 1; i <= arr.length; i++){
        if(typeof arr[i] === "number"){
            if(arr[i] % 2 === 0){
                if(arr[i + 1] % 2 !==0){
                    output += 0;
                }else{
                    output = 1;
                }
            }else{
                output *= arr[i];
            }
        }
    }
    console.log(output);
}