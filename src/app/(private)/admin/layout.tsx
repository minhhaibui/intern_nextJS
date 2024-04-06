import { Layout } from 'antd';
import { canRoute } from '@/test/config.test';
import { redirect } from 'next/navigation';
import sitemap from '@/configs/site.config';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if (!canRoute) {
  //   return redirect(sitemap.profile({}));
  // }
  return <Layout>{children}</Layout>;
}
