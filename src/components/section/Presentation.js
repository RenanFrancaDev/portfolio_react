import styles from '../styles/Presentation.module.css'
import Button1 from '../elementos/Button1'

function Presentation(){
    return (
        <div className={styles.presentation} id="presentation">
          <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
          <h1>Olá, eu sou Renan</h1>
          <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
            Como Product Manager, eu tenho o compromisso de resolver problemas<br/>
            complexos e trazer resultados excepcionais para os negócios.<br/>
            Meus projetos já geraram milhões de reais em receita anual<br/>
            estou sempre em busca de novos desafios para superar.<br/>
          </p>
          <Button1 text='Conecte-se Comigo' link='https://www.linkedin.com/in/renan-franca/'/>
        </div>
    )
}

export default Presentation