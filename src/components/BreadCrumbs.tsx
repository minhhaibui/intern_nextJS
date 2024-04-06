'use client';

import Text from './Text';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { NavbarProps } from '@/types/Navbar.types';

export default function BreadCrumbs({ pathname }: NavbarProps) {
  const [path, setPathname] = useState(pathname);
  const pathClient = usePathname();
  useEffect(() => {
    setPathname(pathClient);
  }, [pathClient]);
  const pathList = path.split('/');
  const breadcrumbs = pathList.map((item, index) => ({
    title: (
      <Link href={`${pathList.slice(0, index + 1).join('/')}`}>
        <Text>{item}</Text>
      </Link>
    ),
  }));
  return <Breadcrumb items={breadcrumbs} />;
}
