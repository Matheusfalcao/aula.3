import {Router, Request, Response} from 'express'
import { title } from 'process'

const router = Router()

//criando a primeira rota
router.get("/",(req,res) =>{

    let idade: number = 18
    let mostraridade: boolean = false

    if(idade >= 18){
        mostraridade = true
    }


    res.render('home',{
        name: "Matheus",
        lastname:"Falcão",
        mostraridade,
        produtos: [
            {título: 'Protudo X',preço: 200},
            {título: 'Protudo Y',preço: 200},
            {título: 'Protudo Z',preço: 200},
        ]
    })
})



router.get('/contato',(req:Request,res:Response) =>{
    res.render("contato")
})

router.get('/sobre',(req:Request,res:Response) =>{
    res.render("sobre")
})   


//ROTA ESTÁTICA
router.get('/noticia/titulo-da-noticia',(req:Request,res:Response) =>{
    res.send("Noticia Aparecendo na tela")
})

//ROTA DINÂMICA
router.get('/noticia/:slug',(req:Request,res:Response) =>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req:Request,res:Response) =>{
    let {origem,destino} = req.params
    res.send(`Procurandos voos de ${origem} até ${destino}`)
})



export default router