import {
  Page,
  Text,
  Link,
  View,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
} from '@react-pdf/renderer'
import styles from '../styles/GuideRenderer.module.css'

export default function GuideRenderer(props) {
  return (
    <div className={styles.container}>
      <PDFViewer className={styles.viewer}>{props.children}</PDFViewer>
    </div>
  )
}

/*
PALETTE

light green, c black
$olivine: rgba(151, 187, 119, 1);

yellow, c black
$flax: rgba(244, 226, 133, 1);

orange, c black
$sandy-brown: rgba(244, 162, 89, 1);

dark green, c white
$wintergreen-dream: rgba(91, 142, 125, 1);

red, c white
$bittersweet-shimmer: rgba(188, 75, 81, 1);
*/

export function getTitle(responses) {
  return `How to work with ${
    responses.name || 'me'
  } - ${new Date().toLocaleDateString()}`
}

export function createDocument(responses) {
  const worksans = (style) => `/fonts/WorkSans-${style}.ttf`
  Font.register({
    family: 'Work Sans',
    fonts: [
      { src: worksans('Regular'), fontWeight: '400' },
      { src: worksans('Bold'), fontWeight: '700' },
    ],
  })

  function isNonEmpty(key) {
    return !!(
      typeof responses[key] === 'string' &&
      responses[key].trim() &&
      responses[key] !== 'N/A'
    )
  }

  const pdfStyles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      fontFamily: 'Work Sans',
      fontWeight: 'normal',
      height: '100%',
    },
    leftSection: {
      backgroundColor: 'rgba(218, 231, 227, 1)',
      color: '#222',
      flex: 2,
      flexDirection: 'column',
      height: '100%',
      padding: 20,
    },
    rightSection: {
      backgroundColor: 'rgba(91, 142, 125, 1)',
      color: '#eee',
      flex: 5,
      flexDirection: 'column',
      height: '100%',
      padding: 20,
    },
    logoIntro: {
      color: 'rgba(91, 142, 125, 0.8)',
      fontSize: 11,
      fontWeight: 'bold',
      paddingLeft: 1,
      textDecoration: 'none',
    },
    logoText: {
      color: '#222',
      fontSize: 11,
      fontWeight: 'bold',
      paddingLeft: 4,
      paddingVertical: 45,
      textDecoration: 'none',
    },
    logoLink: {
      textDecoration: 'none',
    },
    logoContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    logo: {
      paddingVertical: 38,
      width: '50%',
    },
    leftSubsection: {
      flexDirection: 'column',
      marginBottom: 16,
    },
    leftHeader: {
      color: 'rgba(91, 142, 125, 0.8)',
      fontSize: 13,
      fontWeight: 'bold',
      paddingLeft: 1,
    },
    leftContent: {
      fontSize: 24,
    },
    rightSubsection: {
      flexDirection: 'column',
      marginBottom: 16,
    },
    rightHeader: {
      color: 'rgba(218, 231, 227, 1)',
      fontSize: 13,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    rightContent: {
      color: 'rgba(218, 231, 227, 1)',
      fontSize: 16,
      lineHeight: 1.5,
    },
    rightAnnouncement: {
      marginTop: 16,
    },
    rightAnnouncementText: {
      color: 'rgba(218, 231, 227, 1)',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  })

  return (
    <Document
      creator="qg2.work"
      producer="qg2.work"
      title={getTitle(responses)}
    >
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.leftSection} fixed={true}>
          <Link src="http://qg2.work/" style={pdfStyles.logoLink}>
            <View style={pdfStyles.logoContainer}>
              <Text style={pdfStyles.logoIntro}>a guide by</Text>
              <Text style={pdfStyles.logoText}>qg2.work</Text>
            </View>
          </Link>

          {isNonEmpty('name') && (
            <View style={pdfStyles.leftSubsection}>
              <Text style={pdfStyles.leftHeader}>Preferred name</Text>
              <Text style={pdfStyles.leftContent}>{responses.name}</Text>
            </View>
          )}

          {isNonEmpty('pronouns') && (
            <View style={pdfStyles.leftSubsection}>
              <Text style={pdfStyles.leftHeader}>Pronouns</Text>
              <Text style={pdfStyles.leftContent}>{responses.pronouns}</Text>
            </View>
          )}

          {isNonEmpty('title') && (
            <View style={pdfStyles.leftSubsection}>
              <Text style={pdfStyles.leftHeader}>Job title</Text>
              <Text
                style={[
                  pdfStyles.leftContent,
                  responses.title.length <= 10
                    ? { fontSize: 24 }
                    : { fontSize: 16 },
                ]}
              >
                {responses.title}
              </Text>
            </View>
          )}
        </View>
        <View style={pdfStyles.rightSection}>
          <View style={pdfStyles.rightAnnouncement}>
            <Text style={pdfStyles.rightAnnouncementText}>
              I look forward to working with you. Here are some things that may
              be helpful to know.
            </Text>
          </View>

          {isNonEmpty('expertise') && (
            <View style={pdfStyles.rightSubsection}>
              <Text style={pdfStyles.rightHeader}>
                I can be the expert in the room on...
              </Text>
              <Text style={pdfStyles.rightContent}>{responses.expertise}</Text>
            </View>
          )}

          {isNonEmpty('communication') && (
            <View style={pdfStyles.rightSubsection}>
              <Text style={pdfStyles.rightHeader}>
                My preferred communication style
              </Text>
              <Text style={pdfStyles.rightContent}>
                {responses.communication}
              </Text>
            </View>
          )}

          {isNonEmpty('feedback') && (
            <View style={pdfStyles.rightSubsection}>
              <Text style={pdfStyles.rightHeader}>
                The best way to give feedback on my work
              </Text>
              <Text style={pdfStyles.rightContent}>{responses.feedback}</Text>
            </View>
          )}

          {isNonEmpty('accommodations') && (
            <View style={pdfStyles.rightSubsection}>
              <Text style={pdfStyles.rightHeader}>Just so you know...</Text>
              <Text style={pdfStyles.rightContent}>
                {responses.accommodations}
              </Text>
            </View>
          )}

          {isNonEmpty('tips') && (
            <View style={pdfStyles.rightSubsection}>
              <Text style={pdfStyles.rightHeader}>
                For best results, keep in mind
              </Text>
              <Text style={pdfStyles.rightContent}>{responses.tips}</Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  )
}
