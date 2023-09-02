import { memo, useCallback } from 'react';

import cls from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export interface TabBtnProps {
  isActive: boolean;
  title: string;
  index: number;
  onChangeTab: (index: number) => void;
}

const TabBtn = memo((props: TabBtnProps) => {
  const { isActive, onChangeTab, title, index } = props;

  const onClick = useCallback(() => onChangeTab(index), [index, onChangeTab]);

  return (
    <Button
      onClick={onClick}
      className={classNames(cls.tabs__btn, {
        [cls.active]: isActive,
      })}
    >
      {title}
    </Button>
  );
});

export { TabBtn };
