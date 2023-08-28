import styles from '../styles/Projects.module.css'
import Button2 from '../elementos/Button2'
import Card from '../elementos/Card'
import card1 from '../../images/cards/card_project.svg'

function Projects(){
    return (
        <div id="project" className={styles.projects}>
        <h1>Projetos</h1>
        <Card
        img={card1}
        title='DNC'
        description='Repositório criado com React no curso de Tecnologia da DNC'
        tech='HTML, CSS, JavaScript e React.js'
        repo='https://github.com/RenanFrancaDev/portfolio_react'
        site='https://github.com/RenanFrancaDev/portfolio_react'
         />
        {/* <Card
        img={card1}
        title=''
        description=''
        tech=''
        repo=''
        site=''
        /> */}
            <Button2 text='Acesse o repositório' link='https://github.com/RenanFrancaDev/portfolio_react' />
        </div>
    )
}

export default Projects