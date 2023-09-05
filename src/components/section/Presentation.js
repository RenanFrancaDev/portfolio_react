import styles from '../styles/Presentation.module.css'
import Button1 from '../elementos/Button1'
import { useEffect, useState } from 'react'

function Presentation(){

  const [text, setText] = useState('');
  const rotate = ['Renan França', 'Desenvolvedor Front End', 'Engenheiro de Produção'];
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
          <p>Engenheiro de Produção, que migrou para a área de técnologia, onde estou cursando Superior em Análise e Desenvolvimento de Sistemas, trabalhando com projetos em React.js e Data² e cursando a Formação em Tecnologia (Full Stack) pela DNC.
          Atualmente faço aplicativos personalizados pela Fire Development e presto serviços de Desenvolvedor Web para o Mauá Bank.
          
          </p>
          <Button1 text='Conecte-se Comigo' link='https://www.linkedin.com/in/renan-franca/'/>
        </div>
    )
}

export default Presentation