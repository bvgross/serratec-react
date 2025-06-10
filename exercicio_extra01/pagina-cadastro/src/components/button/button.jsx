import styles from './button.module.css';

export function Button({ type, onclick, children }) {

  return (
    <button className={styles.buttonStyle} type={type} onClick={onclick}>{children}</button>
  )

}
