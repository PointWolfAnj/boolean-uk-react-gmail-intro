import './styles/app.css'
import './styles/styles.css'
import './styles/main.css'
import './styles/header.css'
import './styles/nav.css'

import Header from './header'
import Nav from './nav'
import Main from './main'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App