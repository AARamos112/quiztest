
import "./index.css";
import Quiz from './pages/quiz';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Grading from './pages/Grading';
import MathQuiz from './pages/mathquiz';
import Navbar from './Navigation/Navbar';
import SqlQuiz from "./pages/sqlpractice";



function App() {
  
  return (
        <div >
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                {/* <Route path="/Grading" element={<Grading />} /> */}
                <Route path="/mathquiz" element={<MathQuiz />} />
                <Route path="/sqlpractice" element={<SqlQuiz />} />
              </Routes>
          </BrowserRouter>
        </div>
    
  );
};

export default App;
