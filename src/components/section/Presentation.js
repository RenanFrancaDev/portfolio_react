import styles from '../styles/Presentation.module.css'
import Button1 from '../elementos/Button1'
import { useEffect, useState } from 'react'

function Presentation(){

  const [text, setText] = useState('');
  const rotate = ['Renan França', 'Desenvolvedor Front End'];
  const [loop, setLoop] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100)


  useEffect(()=>{
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return ()=> {clearInterval(ticker)}
  }, [text])

  const toType = () =>{
    let i = loop % rotate.length
    let fullText = rotate[i]
    let upadatedText = deleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

    setText(upadatedText);

    if(!deleting && upadatedText === fullText){
      setDeleting(true);
      setDelta(period);
    } else if (deleting === true && upadatedText === '') {
      setDeleting(false)
      setDelta(period)
      setLoop(loop+1)
    }
  }

    return (
        <div className={styles.presentation} id="presentation">
          <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
          <h1>Olá, eu sou {text}</h1>
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