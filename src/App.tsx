import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
