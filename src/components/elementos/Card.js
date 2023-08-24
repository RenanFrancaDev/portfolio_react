import styles from './Card.module.css'
import Button2 from './Button2'

function Card({img, title, description, tech, repo, site}){
    return (
        <div className={styles.card}>
           <a href={site}>
                <img src={img} alt='Card'/>
           </a>
           <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong>{tech}</p>
                <p>{description}</p>
                <Button2 text='Acesse o Repositório' link={repo}/>
           </section>
        </div>
    )
}

export default Card