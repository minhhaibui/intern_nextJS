import { Metadata } from 'next';
import { getMetadata } from '@/apis/site';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Đăng nhập');
  return metadata;
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
