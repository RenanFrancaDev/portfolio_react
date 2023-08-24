import styles from '../styles/Navbar.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/RenanFrancaDev'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/renan-franca/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div> 
    )
}

export default Navbar