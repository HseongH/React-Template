import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Test</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
