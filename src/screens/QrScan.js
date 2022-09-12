import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

export default function QrScan({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>What is Help?</Header>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Scanner')}
      >
        WEB SITE
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('VideoScreen')}
      >
        VIEDO PLAY
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('WebScreen')}
      >
        FILE DOWNLOAD
      </Button>

      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Go Home
      </Button>
    </Background>
  )
}
