import { memo, ReactNode } from 'react';

import cls from './Tabs.module.scss';

interface TabItemProps {
  title: string;
  children: ReactNode;
}

const Tab = memo((props: TabItemProps) => {
  const { children, title } = props;

  return <div className={cls.tabs__tab}>{children}</div>;
});

export { Tab };
