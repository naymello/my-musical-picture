import React from 'react'

import Seo from '../components/Seo'
import Navigation from '../components/Navigation'
import Form from '../components/Form'

import GlobalStyle from '../styles/GlobalStyle'

const SettingsPage = () => (
  <>
    <Seo title="Settings" />
    <GlobalStyle />
    <Navigation />
    <Form />
  </>
)

export default SettingsPage
