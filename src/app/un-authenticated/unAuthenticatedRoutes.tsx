import type { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { CallBack } from './callback';
import { Login } from './login';
import { UnAuthenticatedLayout } from './unAuthenticatedLayout';

export const UnAuthenticatedRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to={'/login'} />} />
    <Route element={<UnAuthenticatedLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="callback" element={<CallBack />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Route>
  </Routes>
);
