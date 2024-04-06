import type { Metadata } from 'next';
import { getMetadata } from '@/apis/site';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Trang cá nhân');
  return metadata;
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
