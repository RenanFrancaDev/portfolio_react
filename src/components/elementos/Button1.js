import styles from './Button1.module.css'

function Button1({text, link}){
    return (
        <div>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default Button1