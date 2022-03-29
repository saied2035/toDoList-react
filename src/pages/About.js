import { Routes, Route, Link } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => (
  <>
    <h1>welcome in About page </h1>
    <ul id="About-page">
      <li>
        <Link className="active-link About-links" to="about-app">About App</Link>
      </li>
      <li>
        <Link className="active-link About-links" to="about-author">About Author</Link>
      </li>
    </ul>
    <Routes>
      <Route path=":slug" element={<SinglePage />} />
    </Routes>
  </>
);
export default About;
