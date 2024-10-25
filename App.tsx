import React from 'react'
import { FeedProvider } from './src/Context/FeedContext'
import { Layout } from './src/Components/Layout/Layout'

const App = () => {
  return (
  <FeedProvider>

    <Layout/>
  </FeedProvider>
  )
}

export default App;

