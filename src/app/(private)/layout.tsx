import { Layout } from 'antd';
import { getHeader } from '@/helpers/next';
import { isLogin } from '@/test/config.test';
import { redirect } from 'next/navigation';
import sitemap from '@/configs/site.config';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if (!isLogin) {
  //   const pathname = getHeader('x-pathname');
  //   // console.log('ok');
  //   return redirect(
  //     sitemap.auth.login({
  //       next: pathname,
  //     })
  //   );
  // }
  return <Layout>{children}</Layout>;
}
