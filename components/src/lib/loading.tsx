import { CircularProgress, Stack } from '@mui/material';

export const Loading = () => (
  <Stack
    sx={{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress />
  </Stack>
);
