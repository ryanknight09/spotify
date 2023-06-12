import type { FC } from 'react';
import { useEffect } from 'react';

import { Typography } from '@mui/material';
import { getToken } from '@spotify/api';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth } from '../auth-context/authContext';

export const CallBack: FC = () => {
  const [params] = useSearchParams();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const code = params.get('code') || '';
      const token = await getToken(code);

      if (token) {
        setToken(token);
        navigate('/home');
      }
    };

    getUser();
  }, [navigate, params, setToken]);

  return <Typography color="primary">Finishing login...</Typography>;
};
