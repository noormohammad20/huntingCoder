import * as fs from 'fs'

//api end point: http://localhost:3000/api/getBlog?slug=how-to-learn-javascript

export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: 'no blog found' })
        }
        console.log()
        res.status(200).json(JSON.parse(data))
    })

}
