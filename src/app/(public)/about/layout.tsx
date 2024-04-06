import type { Metadata } from 'next';
import { getMetadata } from '@/apis/site';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Giới thiệu');
  return metadata;
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
