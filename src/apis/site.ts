import { cloneObj } from '@/helpers/string';

const meta = {
  title: 'Test',
  description: 'The descriptions.',
};

const navbar = [
  {
    key: '/',
    label: 'Trang chủ',
  },
  {
    key: '/about',
    label: 'Giới thiệu',
  },
  {
    key: '/auth/login',
    label: 'Đăng nhập',
  },
];

export async function getMetadata(title?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = cloneObj(meta);
  if (title) {
    data.title = meta.title + ' | ' + title;
  }
  return data;
}
export async function getNavbar() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const data = cloneObj(navbar);

  return data;
}
