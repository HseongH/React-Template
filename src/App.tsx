import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
