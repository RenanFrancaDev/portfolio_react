import styles from '../styles/Projects.module.css'
import Button2 from '../elementos/Button2'
import Card from '../elementos/Card'
import portfolio from '../../images/cards/portfolio.png'
import highlevel from '../../images/cards/highlevel.jpeg'
import todolist from '../../images/cards/todolist.png'
import apple from '../../images/cards/apple.png'
import dio from '../../images/cards/dio.png'
import xmen from '../../images/cards/xmen.png'
import ccpx from '../../images/cards/CCPX.png'
import pokedex from '../../images/cards/Pokedex.png'
import ecommerce from '../../images/cards/ecommerce.png'
import twitter from '../../images/cards/clone_twitter.png'
import search from '../../images/cards/search_count.png'

function Projects(){
    return (
        <div id="project" className={styles.projects}>
        <h1>Projetos</h1>
        <Card
        img={portfolio}
        title='Portfolio completo com JavaScript'
        description='Repositório criado com React no curso de JavaScript Avançado pela DIO'
        tech=' HTML, CSS, JavaScript'
        repo='https://github.com/RenanFrancaDev/developer-portfolio'
        site='https://renanfrancadev.github.io/developer-portfolio/'
         />
        <Card
        img={todolist}
        title='To do List - React'
        description='Projeto de To Do List craido com React.js, usando modais'
        tech=' HTML, React.js, Sass e Node.js'
        repo='https://github.com/RenanFrancaDev/todolist_react'
        site='https://todolist-react-ecru-nine.vercel.app/'
        />
          <Card
        img={dio}
        title='Login Plataforma DIO'
        description=' Tela de login, fazendo o clone da DIO, com objetivo de apontar erros de login. Fazer Login com renan@email.com senha 123456'
        tech=' HTML, CSS, React.js, TypeScript e Node.js'
        repo='https://github.com/RenanFrancaDev/dio-clone'
        site='https://dio-clone-mu.vercel.app/'
        />
        <Card
        img={pokedex}
        title='Pokedex'
        description='Pokedex criado com JavaScript, fazendo requisição de API externa'
        tech=' HTML, CSS, JavaScript e Node.js'
        repo='https://github.com/RenanFrancaDev/pokedex'
        site='https://pokedex-pi-ten-37.vercel.app/
        ' 
        />
        <Card
        img={ecommerce}
        title='Site E-commerce'
        description='Projeto de Loja virtual em andamento, usando API Local'
        tech=' HTML, CSS e React.js'
        repo='https://github.com/RenanFrancaDev/ecommerce'
        site='https://ecommerce-fawn-iota-72.vercel.app/'
        />
        <Card
        img={ccpx}
        title='Página de Evento CCXP'
        description='Simulação de uma página apra empresa de marketing, usando countdown'
        tech='HTML, CSS e JavaScript'
        repo='https://github.com/RenanFrancaDev/CCXP'
        site='https://ccxp-theta.vercel.app/'
        />
        <Card
        img={apple}
        title='Apple'
        description='Clone do Site da Apple'
        tech=' HTML, CSS e JavaScript'
        repo='https://github.com/RenanFrancaDev/Apple'
        site='https://apple-inky.vercel.app/'
        />
         <Card
        img={xmen}
        title='X-men'
        description='Projeto X-men, saiba mais sobre seu personagem.'
        tech=' HTML, CSS e JavaScript'
        repo='https://github.com/RenanFrancaDev/x-men'
        site='https://x-men-sepia.vercel.app/'
        />
        <Card
        img={twitter}
        title='Clone Twitter'
        description='UI clone do twitter, projeto base. Em andamento, falando criar um API para posts e estilização dos usuários.'
        tech=' HTML, CSS, React.js, TypeScript'
        repo='https://github.com/RenanFrancaDev/clone_twitter'
        site='https://clone-twitter-silk.vercel.app/'
        />
        <Card
        img={search}
        title='Search Countries'
        description='Página para fazer a busca de informação de países (Em inglês), consultando API externa'
        tech=' HTML, Bootstrap e Javascript'
        repo='https://github.com/RenanFrancaDev/search_countries'
        site=''
        />
        <Card
        img={highlevel}
        title='High Level App'
        description='Criação de aplicativo personalizado para High Level Brasil (mobile)'
        tech=' Data²'
        repo='https://app.highlevelbrasil.com.br/'
        site='https://app.highlevelbrasil.com.br/'
        />

            <Button2 text='Acesse o repositório' link='https://github.com/RenanFrancaDev/portfolio_react' />
        </div>
    )
}

export default Projects