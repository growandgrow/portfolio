import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Components from './pages/components';
import Layout from './layout/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/component" element={<Components/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
