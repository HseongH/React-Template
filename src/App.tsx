import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
