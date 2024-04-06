import '@/styles/globals.scss';

import { Content, Header } from 'antd/es/layout/layout';
import { getMetadata, getNavbar } from '@/apis/site';

import BreadCrumbs from '@/components/BreadCrumbs';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import clsx from 'clsx';
import { fontSans } from '@/configs/font.config';
import { getHeader } from '@/helpers/next';
import Loading from '@/components/Loading';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Trang chủ');
  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = await getNavbar();
  const pathname = getHeader('x-pathname');

  return (
    <html lang="vi" suppressHydrationWarning suppressContentEditableWarning>
      <body className={clsx('body', fontSans.className)}>
        <Providers>
          <Header>
            {navbar ? (
              <Navbar navbar={navbar} pathname={pathname} />
            ) : (
              <Loading></Loading>
            )}
          </Header>
          <Content className="container px-4">
            <BreadCrumbs pathname={pathname} />
            {children}
          </Content>
        </Providers>
      </body>
    </html>
  );
}
