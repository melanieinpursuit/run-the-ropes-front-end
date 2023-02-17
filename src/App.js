// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// PAGES
import Edit from './Pages/Edit.js'
import Four0Four from './Pages/FourOFour.js'
import Home from './Pages/Home.js'
import Index from './Pages/Index.js'
import New from './Pages/New.js'
import Show from './Pages/Show.js'
import './App.css';

// COMPONENTS
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wrestlers' element={<Index />} />
          <Route path='/wrestlers/new' element={<New />} />
          <Route exact path='/wrestlers/:id' element={<Show />} />
          <Route path='/wrestlers/:id/edit' element={<Edit />} />
          <Route path='*' element={<Four0Four />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
