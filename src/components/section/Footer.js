import styles from '../styles/Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer(){
    return (
        <div className={styles.footer}>
             <ul>
                <li><a href='https://github.com/RenanFrancaDev'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/renan-franca/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>renanfranca.dev@gmail.com</p>
            <p>Renan França @ 2023</p>
        </div>
    )
}

export default Footer