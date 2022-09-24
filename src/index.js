
import express from 'express'
import configViewEngine from './configs/viewEngine'

const app = express()
const port = 3000

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('test/index.ejs')
})

app.get('/hello', (req, res) => {
    res.send('Hello again!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

