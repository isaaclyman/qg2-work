import Image from 'next/image'
import baseStyles from '../../styles/Home.module.css'
import styles from '../../styles/Create.module.css'
import SkippableInput from '../../components/skippableInput'
import SkippableTextarea from '../../components/skippableTextarea'
import SkippableSelect from '../../components/skippableSelect'
import useStickyState from '../../helpers/useStickyState.hook'
import { useRouter } from 'next/router'

export default function Create() {
  const sections = [
    'name',
    'pronouns',
    'title',
    'expertise',
    'accommodations',
    'communication',
    'feedback',
    'tips',
    'submit',
  ]

  const reversedSections = sections.slice().reverse()

  const [formState, setFormState] = useStickyState(
    {
      name: '',
      pronouns: '',
      title: '',
      expertise: '',
      accommodations: '',
      communication: '',
      feedback: '',
      tips: '',
    },
    'createForm'
  )

  function getSectionsToShow() {
    let lastFilledSection = reversedSections.find(
      (section) => formState[section] && formState[section] !== ''
    )
    if (!lastFilledSection) {
      return [sections[0]]
    }

    return sections.slice(0, sections.indexOf(lastFilledSection) + 2)
  }

  function getClasses(section) {
    return [
      styles.section,
      styles['section-' + section],
      getSectionsToShow().includes(section) ? '' : styles.sectionHidden,
    ].join(' ')
  }

  const router = useRouter()
  function submit() {
    console.log(formState)
    router.push('/view')
  }

  function updateValue(key, value) {
    setFormState({
      ...formState,
      [key]: value,
    })
  }

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
        <div className={getClasses('name')}>
          <p>
            Welcome! Let's start with your preferred name or
            nickname&mdash;whatever you'd like people to call you.
          </p>

          <SkippableInput
            placeholder="Nicky"
            value={formState.name}
            onChange={(value) => updateValue('name', value)}
          ></SkippableInput>
        </div>

        {/* PRONOUNS */}
        <div className={getClasses('pronouns')} key="pronouns">
          <p>Great! What are your pronouns, if you're comfortable sharing?</p>

          <SkippableInput
            placeholder="they/them"
            value={formState.pronouns}
            onChange={(value) => updateValue('pronouns', value)}
          ></SkippableInput>
        </div>

        {/* JOB TITLE */}
        <div className={getClasses('title')}>
          <p>What's your job title?</p>

          <SkippableInput
            placeholder="Software Engineer"
            value={formState.title}
            onChange={(value) => updateValue('title', value)}
          ></SkippableInput>
        </div>

        {/* EXPERTISE */}
        <div className={getClasses('expertise')}>
          <p>
            What are you especially good at? You can be the expert in the room
            on...
          </p>

          <SkippableTextarea
            placeholder="- Functional JavaScript"
            hint="2-3 lines recommended"
            rows="3"
            value={formState.expertise}
            onChange={(value) => updateValue('expertise', value)}
          ></SkippableTextarea>
        </div>

        {/* ACCOMMODATIONS */}
        <div className={getClasses('accommodations')}>
          <p>
            What accommodations would you like your colleagues to know about?
            You can mention any disability, physical or mental limitation,
            allergy, or other need you feel comfortable sharing.
          </p>

          <SkippableTextarea
            placeholder={
              'I have ADHD, so I work best when everything is written down and ' +
              'deadlines are clearly communicated in advance.'
            }
            value={formState.accommodations}
            onChange={(value) => updateValue('accommodations', value)}
          ></SkippableTextarea>
        </div>

        {/* COMMUNICATION */}
        <div className={getClasses('communication')}>
          <p>What's your preferred communication style?</p>

          <SkippableSelect
            value={formState.communication}
            onChange={(value) => updateValue('communication', value)}
            options={[
              'Asynchronous: Slack or email',
              'Synchronous: Zoom or phone call',
              'No preference: Whatever works best for you',
            ]}
          ></SkippableSelect>
        </div>

        {/* FEEDBACK */}
        <div className={getClasses('feedback')}>
          <p>How do you prefer to receive feedback on your work?</p>

          <SkippableSelect
            value={formState.feedback}
            onChange={(value) => updateValue('feedback', value)}
            options={[
              'Face-to-face in a casual conversation',
              'A short message outside of work hours',
              'Direct, but couched in praise',
              'Please submit all feedback through my manager',
              'No preference',
            ]}
          ></SkippableSelect>
        </div>

        {/* TIPS */}
        <div className={getClasses('tips')}>
          <p>
            What else should your colleagues know to work with you most
            effectively?
          </p>

          <SkippableTextarea
            placeholder={
              "I prefer not to hang out outside of work, but I'm " +
              "always happy to chat in passing. Don't be afraid to say hi!"
            }
            value={formState.tips}
            onChange={(value) => updateValue('tips', value)}
          ></SkippableTextarea>
        </div>

        {/* SUBMIT */}
        <div className={getClasses('submit')}>
          <p>
            Great! Feel free to review what you've written, then click Submit to
            generate your shareable PDF.
          </p>

          <button onClick={() => submit()}>Submit</button>
        </div>
      </main>
    </div>
  )
}
