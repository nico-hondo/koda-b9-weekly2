export default function buatRentang(mulai, selesai){
    let rentang = '';
    for(let i = mulai; i <= selesai; i++){
        if(i === selesai){
            rentang += i;
        }else{
            rentang += `${i}, `
        }
    }

    console.log(rentang);
}