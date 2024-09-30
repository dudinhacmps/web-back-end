import express from 'express'
//import para pegar alguma coisa que alguém programou e já existe
import {routes} from './routes';

const app= express();
//cria o serv e chama o serv de express
app.use(express.json());
//json  é um arquivo de linguagem para comunicar com outros
//todo arquivo web tem que criar rotas

app.use(routes);
//criamos a rotas(url)
app.listen(333, ()=>
        console.log('Server its runnig ok')
)
//esse arquivo cira o serv e coloca ele pra funcionar