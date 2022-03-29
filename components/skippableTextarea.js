import styles from './skippableInput.module.css'

export default function SkippableTextarea(props) {
  return (
    <div className={styles.inputContainer}>
      <textarea
        placeholder={props.placeholder || ''}
        value={props.value}
        rows={props.rows || 5}
        onChange={event => props.onChange(event.target.value)}
      ></textarea>
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
