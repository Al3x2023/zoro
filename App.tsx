import React from 'react'
import { FeedProvider } from './src/Context/FeedContext'
import { Layout } from './src/Components/Layout/Layout'
import { SessionProvider } from './src/Context/SessionContext'
import { AuthProvider } from './src/Context/AuthContext'

const App = () => {
  return (
  <AuthProvider>
  <SessionProvider>
  <FeedProvider>

    <Layout/>
  </FeedProvider>
  </SessionProvider>
  </AuthProvider>
  )
}

export default App;

