// Just testing out node fetching data, not used in the actual app
const express = require("express")
const PORT = 8080

const app = express()

app.use(express.json())


app.listen(PORT, ()=> console.log(`Running on http://localhost:${PORT}`))


app.get('/babies', async(req,res) => {

    const response = await fetch('http://127.0.0.1:8090/api/collections/babies/records?page=1&perPage=10')
    const babies = await response.json()

    const baby_to_find = babies.items.find(b=>b.name === 'Anaya')

    console.log({baby_to_find})

    const response2 = await fetch(`http://127.0.0.1:8090/api/collections/feed_record/records?page=1&perPage=10&baby_id=${baby_to_find.id}`)
    const feed_records = await response2.json()

    const allResponses = await Promise.all([babies,feed_records])

    allResponses.map(r=>console.log('all',r.items))


    console.log('babies', babies.items)
    console.log('feed',feed_records.items)
    res.send({
        babies: babies.items
    })
})

