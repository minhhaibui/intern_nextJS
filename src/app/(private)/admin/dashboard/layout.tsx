import { Metadata } from 'next';
import { getMetadata } from '@/apis/site';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Trang quản trị');
  return metadata;
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
