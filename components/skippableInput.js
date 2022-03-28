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
      <div>
        <button className={styles.skipButton} onChange={() => props.onChange('N/A')}>
          Skip
        </button>
      </div>
    </div>
  )
}
