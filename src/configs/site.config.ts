import type { UrlParamQuery } from '@/types/URL.types';
import { urlBuilder } from '@/helpers/string';

export const SERVER_URL = process.env.SERVER_URL;
export const HOST_URL = process.env.HOST_URL;

export const sitemap = {
  admin: {
    dashboard: ({ param, query }: UrlParamQuery) =>
      urlBuilder('/admin/dashboard', { param, query }),
  },
  profile: ({ param }: UrlParamQuery) => urlBuilder('/profile', { param }),
  auth: {
    login: (query: UrlParamQuery['query']) =>
      urlBuilder('/auth/login', { query }),
    active: (query: UrlParamQuery['query']) =>
      urlBuilder('/auth/active', { query }),
    forgotPassword: (query: UrlParamQuery['query']) =>
      urlBuilder('/auth/forgot', { query }),
    resetPassword: (query: UrlParamQuery['query']) =>
      urlBuilder('/auth/reset', { query }),
  },
};
export default sitemap;
