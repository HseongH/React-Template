import Box from '@/components/Box';
import Widget from '@/components/Widget/Widget';
import WidgetHeader from '@/components/Widget/WidgetHeader';
import { CubeIcon } from '@heroicons/react/16/solid';

function Home() {
  return (
    <div className="columns-3">
      <Widget>
        <WidgetHeader>
          <CubeIcon className="mr-1 inline-block size-6" /> Test
        </WidgetHeader>
      </Widget>
      <Box>Test</Box>
      <Box>Test</Box>
    </div>
  );
}

export default Home;
