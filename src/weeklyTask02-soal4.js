const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        if(status){
            setTimeout(() => {
                resolve("Data Berhasil Disimpan")
            }, 3000)
        }else{
            reject("Gagal Mengambil Data")
        }
    })
}

function asyncAdd(status) {
    fetchData(status)
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
}

async function makeAsyncAdd(status){
    try{
        const result = await fetchData(status);
        console.log(result)
    }catch(error){
        console.log(error);
    }
}

export {asyncAdd, makeAsyncAdd}