import { Children, memo, ReactElement, useCallback, useState } from 'react';

import cls from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { TabBtn } from '@/shared/ui/Tabs/TabBtn';

interface TabsProps {
  isReverse?: boolean;
  children: ReactElement<{ title: string }>[];
}

const Tabs = memo((props: TabsProps) => {
  const [active, setActive] = useState(0);
  const { children, isReverse } = props;
  const onChangeTab = useCallback(
    (index: number) => {
      setActive(index);
    },
    [setActive],
  );

  return (
    <div
      className={classNames(cls.tabs, {
        [cls.reverse]: isReverse,
      })}
    >
      <div className={cls.tabs__panel}>
        {Children.map(children, (child, index) => (
          <TabBtn
            index={index}
            onChangeTab={onChangeTab}
            title={child.props.title}
            isActive={active === index}
          />
        ))}
      </div>
      <div className={cls.tabs__content}>{children[active]}</div>
    </div>
  );
});

export { Tabs };
