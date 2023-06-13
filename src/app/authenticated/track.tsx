import HeadphonesIcon from '@mui/icons-material/Headphones';
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import { ListenButton } from '@spotify/components';
import { formatDuration, useHover } from '@spotify/utils';

type TrackProps = {
  orderNum: number;
  imgUrl: string;
  name: string;
  albumName: string;
  artists?: string;
  plays?: number;
  duration: number;
  listenUrl: string;
};

export const Track = ({
  orderNum,
  imgUrl,
  name,
  albumName,
  artists,
  duration,
  plays,
  listenUrl,
}: TrackProps) => {
  const { isHovering, hoverHandlers } = useHover();

  return (
    <SxListItem {...hoverHandlers}>
      <ListItemIcon>
        <SxIndex variant="subtitle2">{orderNum}</SxIndex>
      </ListItemIcon>
      <ListItemAvatar>
        <Avatar variant="square" src={imgUrl}>
          <HeadphonesIcon />
        </Avatar>
      </ListItemAvatar>
      <SxListItemText primary={name} secondary={artists} />
      <SxFlex>
        <SxAlbumName>{albumName || plays}</SxAlbumName>
        {isHovering ? (
          <ListenButton size="small" href={listenUrl} variant="contained">
            Listen on Spotify
          </ListenButton>
        ) : (
          <SxTypography>{formatDuration(duration)}</SxTypography>
        )}
      </SxFlex>
    </SxListItem>
  );
};

export const SxListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '.5rem',
  width: '100%',
  color: theme.palette.neutral.main,
  '&:hover': {
    backgroundColor: theme.palette.primary[200],
  },
}));

const SxAlbumName = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral[100],
  fontSize: '.875rem',
  [theme.breakpoints.down(1080)]: {
    display: 'none',
  },
}));

const SxTypography = styled(Typography)(({ theme }) => ({
  marginLeft: 'auto',
  color: theme.palette.neutral[100],
  fontSize: '.875rem',
}));

const SxIndex = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral[100],
}));

const SxFlex = styled(Box)(() => ({
  width: '40%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const SxListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: theme.palette.common.white,
    fontSize: '1rem',
  },
  '& .MuiListItemText-secondary': {
    color: theme.palette.neutral[100],
    fontSize: '.875rem',
  },
}));
