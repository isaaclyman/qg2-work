import styles from './skippableInput.module.css'

export default function SkippableInput(props) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder={props.placeholder || ''}
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      ></input>
      <div className={styles.belowInput}>
        { props.hint && (<div className={styles.hint}>{props.hint}</div>) }
        <div className={styles.spacer}></div>
        <button className={styles.skipButton} onClick={() => props.onChange('N/A')}>
          Skip
        </button>
      </div>
    </div>
  )
}
