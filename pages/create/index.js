import React from 'react'
import Image from 'next/image'
import baseStyles from '../../styles/Home.module.css'
import styles from '../../styles/Create.module.css'
import SkippableInput from '../../components/skippableInput'

export default class Create extends React.Component {
  constructor(props) {
    super(props)

    this.sections = [
      'name',
      'pronouns',
      'title',
      'expertise',
      'accommodations',
      'communication',
      'feedback',
      'tips',
    ]

    this.reversedSections = this.sections.slice().reverse()

    this.state = {
      name: '',
      pronouns: '',
      title: '',
      expertise: '',
      accommodations: '',
      communication: '',
      feedback: '',
      tips: '',
    }
  }

  getSectionsToShow() {
    let lastFilledSection = this.reversedSections.find(section => this.state[section] !== '')
    if (!lastFilledSection) {
      return [this.sections[0]]
    }

    return this.sections.slice(0, this.sections.indexOf(lastFilledSection) + 2)
  }

  getClasses(section) {
    return [
      styles.section,
      styles['section-' + section],
      this.getSectionsToShow().includes(section) ? '' : styles.sectionHidden,
    ].join(' ')
  }

  updateValue(key, value) {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div className={baseStyles.container}>
        <main className={baseStyles.main}>
          <div className={baseStyles.logo}>
            <Image
              src="/logo.png"
              width={500}
              height={192}
              layout="intrinsic"
            ></Image>
          </div>

          {/* NAME */}
          <div className={this.getClasses('name')} key="name">
            <p>
              Welcome! Let's start with your preferred name or
              nickname&mdash;whatever you'd like people to call you.
            </p>

            <SkippableInput type="text" placeholder="Isaac" value={this.state.name} onChange={value => this.updateValue('name', value)}></SkippableInput>
          </div>

          {/* PRONOUNS */}
          <div className={this.getClasses('pronouns')} key="pronouns">
            <p>
              Great! What are your pronouns, if you're comfortable sharing?
            </p>

            <SkippableInput type="text" placeholder="They/them" value={this.state.pronouns} onChange={value => this.updateValue('pronouns', value)}></SkippableInput>
          </div>
        </main>
      </div>
    )
  }
}
