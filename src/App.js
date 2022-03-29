import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotMatch from './pages/NotMatch';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="About/*" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);
export default App;
