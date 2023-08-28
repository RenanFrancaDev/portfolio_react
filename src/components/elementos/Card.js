import styles from './Card.module.css'
import Button2 from './Button2'
import { useState } from 'react'

function Card({img, title, description, tech, repo, site}){

const [info, setInfo] = useState(false)

function InfoOn(){
    setInfo(true)
}

function InfoOff(){
    setInfo(false)
}
    return (
        <div onMouseLeave={InfoOff} className={styles.card}>
           <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='Card'/>
           </a>

            {info === true &&(

           <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong>{tech}</p>
                <p>{description}</p>
                <Button2 text='Acesse o Repositório' link={repo}/>
           </section>
            )}
        </div>
    )
}

export default Card