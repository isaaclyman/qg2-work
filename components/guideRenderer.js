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

// props: responses { object }
export default function GuideRenderer(props) {
  return (
    <div className={styles.container}>
      <PDFViewer className={styles.viewer}>
        {createDocument(props.responses)}
      </PDFViewer>
    </div>
  )
}

/*
PALETTE

light green
$olivine: rgba(140, 179, 105, 1);

yellow
$flax: rgba(244, 226, 133, 1);

orange
$sandy-brown: rgba(244, 162, 89, 1);

dark green
$wintergreen-dream: rgba(91, 142, 125, 1);

red
$bittersweet-shimmer: rgba(188, 75, 81, 1);
*/

function createDocument(responses) {
  function getTitle() {
    return `How to work with ${
      responses.name
    } - ${new Date().toLocaleDateString()}`
  }

  const worksans = style => `/fonts/WorkSans-${style}.ttf`
  Font.register({
    family: 'Work Sans',
    fonts: [
      { src: worksans('Regular'), fontWeight: '400' },
      { src: worksans('Bold'), fontWeight: '700' },
    ],
  })

  const pdfStyles = StyleSheet.create({
    page: {
      backgroundColor: 'rgba(244, 226, 133, 1)',
      color: '#222',
      flexDirection: 'column',
      fontFamily: 'Work Sans',
      fontWeight: 'normal',
    },
    headerBar: {
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#ddd',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 4,
    },
    headerBarText: {
      color: '#aaa',
      fontSize: 8,
    },
    headerLink: {
      color: '#aaa',
    },
    nameSection: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 32,
      width: '100%',
    },
    nameIntro: {
      fontSize: 20,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    pronouns: {
      color: '#444',
      fontSize: 16,
      marginLeft: 8
    }
  })

  return (
    <Document creator="qg2.work" producer="qg2.work" title={getTitle()}>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.headerBar} fixed={true}>
          <Text style={pdfStyles.headerBarText}>
            made with&nbsp;
            <Link style={pdfStyles.headerLink} src="https://qg2.work/">
              qg2.work
            </Link>
          </Text>
        </View>
        {responses.name && (
          <View style={pdfStyles.nameSection}>
            <Text style={pdfStyles.nameIntro}>My name is </Text>
            <Text style={pdfStyles.name}>{responses.name}</Text>
            {responses.pronouns && (
              <Text style={pdfStyles.pronouns}>({responses.pronouns})</Text>
            )}
          </View>
        )}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Pronouns</Text>
          <Text>{responses.pronouns}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Title</Text>
          <Text>{responses.title}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Areas of expertise</Text>
          <Text>{responses.expertise}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Workplace accommodations</Text>
          <Text>{responses.accommodations}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>
            Preferred communication style
          </Text>
          <Text>{responses.communication}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Preferred feedback style</Text>
          <Text>{responses.feedback}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Collaboration tips</Text>
          <Text>{responses.tips}</Text>
        </View>
      </Page>
    </Document>
  )
}
