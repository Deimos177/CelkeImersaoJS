const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/home')

const Home = mongoose.model('Home')

require('./models/contact')

const Contact = mongoose.model('Contact')

const app = express()

app.use(express.json())

app.use((requisition, response, next)=>{
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Acces-Control-Allow-Methods", 'GET, PUT, POST, DELETE')
    response.header("Acces-Control-Allow-Headers", 'X-PINGOTHER, Content-type, Authorization, ')
    app.use(cors())
    next()
})

mongoose.connect('mongodb://localhost/CelkeImersaoJS', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("Conexão com o MongoDB realizada com sucesso!!!")
}).catch((error)=>{
    console.log(`Error: Ocorreu um erro ao realizar a conexão: ${error}`)
})

app.get('/', (requisition, response)=>{
    response.send("Servidor iniciado")
})

app.get('/home',async  (requisition, response)=>{
    await Home.findOne({}).then((home)=>{
        return response.status(302).json({
            error: false,
            home
        })
    }).catch((error)=>{
        return res.status(404).json({
            error: true,
            message: "Nenhum registro encontrado"
        })
    })
})

app.post('/home', async (requisition, response)=>{
    const homeExist = await Home.findOne({})
    if(homeExist){
        return response.status(400).json({
            error: true,
            message: 'Error: Registro já existente!'
        })
    }

    await Home.create(requisition.body, (error) =>{
        if(error) return response.status(400).json({
            error: true,
            message: 'Error: Conteúdo não cadastrado com sucesso'
        })
    })

    return response.status(201).json({
        error: false,
        message: 'Conteúdo cadastrado com sucesso'
    })
})

app.post('/contato', async (requisition, response) =>{
    await Contact.create(requisition.body, (error)=>{
        if(error) return response.status(400).json({
            error: true,
            message: "Erro: Dados de contato não cadastrado"
        })

        return response.status(201).json({
            error: false,
            message: "Dados de contato cadastrado com sucesso!"
        })
    })
})

app.listen(8080, () =>{
    console.log("Server initiated in 8080 port: http://localhost:8080")
})