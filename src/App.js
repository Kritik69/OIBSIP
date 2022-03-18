import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Resume from './Resume/Resume';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<HomePage />} exact/>
          <Route path='/resume' element={<Resume />} exact/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// rmdir .git