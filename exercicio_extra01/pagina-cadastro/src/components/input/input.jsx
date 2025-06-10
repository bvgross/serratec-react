import styles from "./input.module.css";

export function Input({ value, onChange, placeholder, erro }) {

  return (
    <div className={styles.container}>
      <input className={styles.inputStyle} type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <p className={styles.erroStyle}>{erro}</p>
    </div>
  )

}
