'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Menu } from 'antd';
import { NavbarProps } from '@/types/Navbar.types';

export default function Navbar({ navbar, pathname }: NavbarProps) {
  const [path, setPathname] = useState(pathname);
  const pathClient = usePathname();
  const router = useRouter();
  useEffect(() => {
    setPathname(pathClient);
  }, [pathClient]);

  return (
    <>
      <Menu
        theme="dark"
        items={navbar}
        mode="horizontal"
        defaultSelectedKeys={[path]}
        onClick={(info) => router.push(info.key)}
      />
    </>
  );
}
