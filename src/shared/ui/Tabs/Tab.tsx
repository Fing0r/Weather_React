import { memo, ReactNode } from "react";

interface TabItemProps {
  title: string
  children: ReactNode
}

const Tab = memo((props: TabItemProps) => {
  const { children, title } = props

  return <div className='tabs__tab'>{children}</div>;
});

export { Tab };
