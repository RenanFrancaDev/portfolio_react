import styles from '../styles/Skills.module.css'
import javascript from '../../images/js.svg'
import html from '../../images/html.svg'
import css from '../../images/css.svg'
import react from '../../images/react.svg'
import typescript from '../../images/typescript.svg'
function Skills(){
    return (
        <div className={styles.skill} id="skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}

export default Skills