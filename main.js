

const BASE_URL = "http://localhost:11434/api/embeddings";
const NR_REQ = 100

// 2629 Chars with spaces

const TXT = `

`

const sendReq = async () => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "nomic-embed-text",
            prompt: TXT
        })
    
    })
    console.log(response.status)
    return response.status
};




const main = async () => {


    const promises = [...Array(NR_REQ)].map(async() => sendReq())


    await Promise.all(promises)

    // for (let i = 0; i < NR_REQ; i++) {
    //     await sendReq()
    //     console.log("next")
    // }

};

(async() => {
    console.log("START....")
    console.time('main')
    await main()
    console.log(`FINISHED: time taken for ${NR_REQ} requests...`)
    console.timeEnd("main")
})();





