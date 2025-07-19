import React from 'react'
import { Route ,Routes} from 'react-router';
import Homepage  from './pages/homepage'
import Createpage from './pages/createpage'
import Notedetailspage from './pages/notedetailspage'


const App = () => {
  return(
     <div data-theme="forest">
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<Notedetailspage />} />
      </Routes>
    </div>
  )
  
};

export default App