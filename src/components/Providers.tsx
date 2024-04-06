'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <AntdRegistry {...props}>{children}</AntdRegistry>;
}
