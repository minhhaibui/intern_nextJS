'use client';

import { Button } from 'antd';
import sitemap from '@/configs/site.config';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  function goDashboard() {
    router.push(sitemap.admin.dashboard({}));
  }
  return (
    <>
      Profile
      <Button onClick={goDashboard}>Click here to go to real dashboard</Button>
    </>
  );
}
