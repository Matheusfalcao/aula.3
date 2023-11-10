//importando a biblioteca express
import  express,{Request, Response}from 'express'
import path from 'path'
//importando mustache
import mustache from 'mustache-express'
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'
 
//usando EXPRESS
const server = express()
 

//configurando mustache
server.set('view engine','mustache')
//configurando o caminho da pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
 
//configurando o caminho da pasta public
server.use(express.static(path.join(__dirname,'../public')))
 
server.use(mainRoutes)
 
//criando a página não encontrada
server.use((req:Request, res: Response) =>{
    res.status(404).send('Página não encontrada')
})
 
//gerando o servidor na porta 3000
server.listen(2000)