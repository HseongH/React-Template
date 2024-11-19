import { ReactNode } from 'react';
import Box from '../Box';

interface IWidget {
  children: ReactNode;
}

function Widget({ children }: IWidget) {
  return <Box>{children}</Box>;
}

export default Widget;
