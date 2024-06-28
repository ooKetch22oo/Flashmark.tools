import { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ redirect }) => {
  // This route will be hit if someone tries to access /auth/logout directly
  // We'll just redirect them to the login page
  throw redirect(302, '/auth/login');
};