import Image from 'next/image'
import baseStyles from '../../styles/Home.module.css'
import styles from '../../styles/View.module.css'
import { useReadOnlyStickyState } from '../../helpers/useStickyState.hook'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GuideRenderer, { createDocument } from '../../components/guideRenderer'

const humanFriendlySectionNames = {
  name: 'Name',
  pronouns: 'Pronouns',
  title: 'Title',
  expertise: 'Areas of expertise',
  accommodations: 'Workplace accommodations',
  communication: 'Preferred communication style',
  feedback: 'Preferred feedback style',
  tips: 'Collaboration tips',
}

export default function View() {
  const [isLoaded, setIsLoaded] = useState(false)
  const createForm = useReadOnlyStickyState('createForm')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  function getMissingSections() {
    return Object.keys(createForm)
      .filter((key) => {
        const value = createForm[key]
        return !value || !value.trim || !value.trim() || value === 'N/A'
      })
      .map((key) => humanFriendlySectionNames[key])
      .join(', ')
  }

  return (
    <div className={baseStyles.container}>
      <main className={styles.main}>
        <div className={baseStyles.logo}>
          <Image
            src="/logo.png"
            width={500}
            height={192}
            layout="intrinsic"
          ></Image>
        </div>

        {isLoaded && !createForm && (
          <div>
            <p>
              We couldn't find your responses! Would you like to start over?
            </p>
            <Link href="/create">
              <button>Create a new guide</button>
            </Link>
          </div>
        )}

        {isLoaded && createForm && getMissingSections() && (
          <div className={styles.warningBox}>
            <p>
              It looks like you haven't filled out all the questions. That's
              okay, we'll skip those parts!
            </p>
            <p>
              <i>Missing: {getMissingSections()}</i>
            </p>
          </div>
        )}

        {isLoaded && createForm && !getMissingSections() && (
          <p>Great! We've got everything we need to generate your guide.</p>
        )}

        {isLoaded && createForm && (
          <div className={styles.actions}>
            <Link href="/create">
              <button className={styles.actionButton}>
                Edit your responses
              </button>
            </Link>
          </div>
        )}
      </main>
      {isLoaded && createForm && (
        <>
          <p style={{margin: '4px 0'}}>View and save your PDF:</p>
          <GuideRenderer>{createDocument(createForm)}</GuideRenderer>
        </>
      )}
    </div>
  )
}
