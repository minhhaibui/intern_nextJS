'use client';
import { Button } from 'antd';
import sitemap from '@/configs/site.config';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  function goRessetPassword() {
    router.push(sitemap.auth.resetPassword({}));
  }

  return (
    <div>
      <p> LoginPage</p>

      <Button onClick={goRessetPassword}>go to resetpassword</Button>
    </div>
  );
}
