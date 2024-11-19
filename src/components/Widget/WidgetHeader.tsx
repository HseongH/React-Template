import { Button } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';

interface IWidgetHeader {
  children: ReactNode;
}

function WidgetHeader({ children }: IWidgetHeader) {
  return (
    <div className="flex justify-between">
      <h2 className="mr-4 flex-1 truncate">{children}</h2>
      <Button>
        <EllipsisVerticalIcon className="size-6" />
      </Button>
    </div>
  );
}

export default WidgetHeader;
