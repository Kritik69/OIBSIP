import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import HomePage from './HomePage/HomePage';
// import Resume from './Resume/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Education from './Education/Education';
import Work from './Work/Work';
import Projects from './Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/education' element={<Education />}/>
          <Route path='/work' element={<Work />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// rmdir .git