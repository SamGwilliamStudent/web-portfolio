import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css'
import MainTemplate from './components/mainTemplate/MainTemplate';
import NotFound from './components/notFound/NotFound';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;