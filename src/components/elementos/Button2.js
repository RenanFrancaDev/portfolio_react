import styles from './Button2.module.css'

function Button2({text, link}){
    return (
        <div>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default Button2