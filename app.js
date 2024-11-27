import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url'

const app = express();
app.use(express.json())

const users = [
    {id: 1, name: "Adam"},
    {id: 2, name: "Krampusz"},
    {id: 3, name: "Stu"},
    {id: 4, name: "Abel"},
]

app.get("/hello", (req, res) => {
    
    res.send("Hello Mario!")
})

app.get("/greet", (req, res) => {
    
    res.send("Sup Mario!")
})

app.get("/ciao", (req, res) => {
    
    res.send("Ciao Mario!")
})

const root = path.join(path.dirname(fileURLToPath(import.meta.url)))

app.get("/", (req, res) => {
    res.sendFile(path.join(root, 'index.html'))
})


app.get("/users", (req, res) => {
    res.send(JSON.stringify(users))
})

app.listen(3000, () => {
    console.log(`Server listening on localhost/3000`)
})