import './Styles/_Index.scss'
import Main from './Components/Main'
import Nav from './Components/Nav'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
    </BrowserRouter>
  )
}

export default App
