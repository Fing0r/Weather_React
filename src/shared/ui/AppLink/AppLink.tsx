import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  title: string;
}

const AppLink = (props: AppLinkProps) => {
  const { title, ...otherProps } = props;
  return (
    <Link {...otherProps} className={cls.link}>
      {title}
    </Link>
  );
};

export { AppLink };
