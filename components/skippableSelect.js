import React from 'react'
import styles from './skippableInput.module.css'

const OTHER = '__other__'

export default class SkippableSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      choseOther: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value && props.value.trim() && !props.options.includes(props.value)) {
      return { choseOther: true }
    }

    return null
  }

  getSelectValue() {
    if (this.state.choseOther) {
      return OTHER
    }

    if (!this.props.value || this.props.value.trim() === '') {
      return ''
    }

    if (!this.props.options.includes(this.props.value)) {
      return OTHER
    }

    return this.props.value
  }

  selectChange(value) {
    const choseOther = value === OTHER
    this.setState({ choseOther })

    if (choseOther) {
      this.props.onChange('')
    } else {
      this.props.onChange(value)
    }
  }

  skipSelect() {
    this.setState({ choseOther: true })
    this.props.onChange('N/A')
  }

  render() {
    return (
      <div className={styles.inputContainer}>
        <select
          value={this.getSelectValue()}
          onChange={(event) => this.selectChange(event.target.value)}
        >
          {this.getSelectValue() === '' && <option key="empty" value="">Select...</option>}
          {this.props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option key={OTHER} value={OTHER}>
            Other (write your own)
          </option>
        </select>
        {this.state.choseOther && (
          <input
            className={styles.selectCustomInput}
            type="text"
            placeholder="Write your own response"
            value={this.props.value}
            onChange={(event) => this.props.onChange(event.target.value)}
          />
        )}
        <div className={styles.belowInput}>
          {this.props.hint && <div className={styles.hint}>{this.props.hint}</div>}
          <div className={styles.spacer}></div>
          <button
            className={styles.skipButton}
            onClick={() => this.skipSelect()}
          >
            Skip
          </button>
        </div>
      </div>
    )
  }
}
