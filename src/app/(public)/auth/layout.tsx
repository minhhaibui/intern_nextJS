import { getHeader } from '@/helpers/next';
import { isLogin } from '@/test/config.test';
import { redirect } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (isLogin) {
    // console.log('Auth Login');

    const search = getHeader('x-search');
    const searchParams = new URLSearchParams(search);
    const next = searchParams.get('next') || '/profile';
    if (next) {
      return redirect(next);
    }
  }
  return children;
}
