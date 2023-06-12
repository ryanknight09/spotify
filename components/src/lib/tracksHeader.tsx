import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  styled,
} from '@mui/material';

export const TrackHeader = () => (
  <Stack>
    <ListItem>
      <Typography variant="subtitle2" mr="1rem" color="primary">
        #
      </Typography>
      <SxListItemText primary={'Title'} />
      <SxFlex>
        <Typography variant="subtitle2" mr="1rem" color="primary">
          Album
        </Typography>
        <AccessTimeIcon color="primary" fontSize="small" />
      </SxFlex>
    </ListItem>
    <Divider sx={{ borderColor: (theme) => theme.palette.neutral[200] }} />
  </Stack>
);

const SxFlex = styled(Box)(() => ({
  width: '40%',
  display: 'flex',
  justifyContent: 'space-between',
}));

const SxListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));
