import readline from "node:readline/promises"
import {stdin, stdout} from "node:process";

import task01 from "./src/weeklyTask02-soal1.js";
import task02 from "./src/weeklyTask02-soal2.js";
import task03 from "./src/weeklyTask02-soal3.js";
import {asyncAdd, makeAsyncAdd} from "./src/weeklyTask02-soal4.js";
import asyncAddition from "./src/weeklyTask02-soal5.js";

(async function weeklyTask02(){

    const rl = readline.createInterface({
        input: stdin,
        output: stdout
    })

    try{


        while(true){
            console.clear()

            const getAns = await rl.question(`
                Masukkan Nomor dari Pilihan berikut:
                1. Triangle
                2. Buat Rentang
                3. Process Number
                4. Masukkan Status
                5. Masukkan Status
            `);
            
            console.clear()

            switch(getAns){
                case "1":{
                    const getTri = await rl.question(
                    "Masukkan banyak nomor: " )
                    task01(Number(getTri))
                    break
                }
                case "2":{
                    const getRentang1st = await rl.question("- Masukkan Rentang Mulai: ")
                    const getRentang2nd = await rl.question("- Masukkan Rentang Selesai: ")
                    task02(Number(getRentang1st), Number(getRentang2nd))
                    break
                }
                case "3":{
                    const arr = [];

                    while(true){
                        const getProcessNum = await rl.question("Masukkan Elemen Array(Ketik q untuk selesai): ")

                        if(getProcessNum === "q"){
                            break
                        }

                        arr.push(Number(getProcessNum))
                    }
                    task03(arr);
                    break
                }
                case "4":{
                    const getStatus = await rl.question(`
                Masukkan Status yang sesuai dengan berikut:
                
                200 - Data Berhasil Disimpan
                400 - Permintaan tidak valid(bad request)
                500 - Terjadi kesalahan pada server(Internal Server Error)

                Pilih status:`)

                    switch(getStatus){
                        case "200":
                            asyncAdd(true)
                            makeAsyncAdd(true)
                            break
                        case "400":
                        case "500":
                            asyncAdd(false)
                            makeAsyncAdd(false)
                            break
                        default:
                            console.log("Status yang dimasukkan tidak valid WOI!!!")
                    }
                    break
                }
                case "5":{
                    const getStatus = await rl.question(`
                Masukkan Status yang sesuai dengan berikut:
                
                200 - Data Berhasil Disimpan
                400 - Permintaan tidak valid(bad request)
                500 - Terjadi kesalahan pada server(Internal Server Error)

                Pilih status: `)

                    switch(getStatus){
                        case "200":
                            asyncAddition(true)
                            break
                        case "400":
                        case "500":
                            asyncAddition(false)
                            break
                        default:
                            console.log("Status yang dimasukkan tidak valid WOI!!!")
                    }
                    break
                }
                default:{
                    console.log("Angka yang anda masukkan tidak sesuai")
                }
            }
            const back = await rl.question(`
            Apakah anda ingin kembali ke menu?
            Masukkan 1/y: 'Ya'
            Masukkan 0/n: 'No

            Pilihan anda: `)

            // const ulang = back.toLocaleLowerCase() -> tidak bisa, 0 akan menjadi string

            if(Number(back) === 0 || back.toLocaleLowerCase() === 'n'){
                break
            }
    }
    }catch(error){
        console.log("Terjadi Kesalahan: ", error);
    }finally{
        rl.close();
    }

}())