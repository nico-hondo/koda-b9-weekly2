const getDataFromServer = (status, callback) => {
    if(status){
        setTimeout(() => {
            const products = [
                'Product 1',
                'Product 2',
                'Product 3'
            ]
            callback(products, null)
        }, 3000)
    }else{
        const err = new Error("Failed to fetch data")
        callback(null, err)
    }
}

function processData(data, err){
    if(data === null && err){
        console.log(err)
        return
    }

    let output = ''
    for(let i = 0; i < data.length; i++){
        output += `Product index ke - ${i}: ${data[i]}\n`
    } 
    console.log(output)
}

export default async function asyncAddition(status){
    try{
        const result = await getDataFromServer(status, processData)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}