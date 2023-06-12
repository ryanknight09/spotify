import HeadphonesIcon from '@mui/icons-material/Headphones';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import type { ListItemTextProps } from '@mui/material';
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import { SxSideBarItemButton } from '@spotify/components';
import {
  formatDuration,
  playActive,
  useHover,
  useTracks,
} from '@spotify/utils';

type TrackProps = {
  orderNum: number;
  imgUrl: string;
  name: string;
  albumName: string;
  artists?: string;
  plays?: number;
  duration: number;
  selected?: boolean;
  onClick: () => void;
};

export const Track = ({
  orderNum,
  imgUrl,
  name,
  albumName,
  artists,
  duration,
  plays,
  selected,
  onClick,
}: TrackProps) => {
  const { isHovering, hoverHandlers } = useHover();
  const { play } = useTracks();

  const showIsPlaying = selected && !isHovering && play;
  const showIndex = !selected && !isHovering;
  const showAction = isHovering || (!play && selected);

  const ActionButton = () =>
    selected ? (
      <PauseIcon sx={{ color: '#1DB954' }} fontSize="small" />
    ) : (
      <PlayArrowIcon color="primary" fontSize="small" />
    );

  return (
    <SxSideBarItemButton {...hoverHandlers} onClick={onClick}>
      <ListItemIcon>
        {showIsPlaying && (
          <img
            src={playActive}
            alt="My GIF"
            style={{ width: '24px', height: '24px' }}
          />
        )}
        {showAction && <ActionButton />}
        {showIndex && <SxIndex variant="subtitle2">{orderNum}</SxIndex>}
      </ListItemIcon>
      <ListItemAvatar>
        <Avatar variant="square" src={imgUrl}>
          <HeadphonesIcon />
        </Avatar>
      </ListItemAvatar>
      <SxListItemText primary={name} secondary={artists} selected={selected} />
      <SxFlex>
        <SxAlbumName>{albumName || plays}</SxAlbumName>
        <SxTypography>{formatDuration(duration)}</SxTypography>
      </SxFlex>
    </SxSideBarItemButton>
  );
};

const SxAlbumName = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral[100],
  fontSize: '.875rem',
  [theme.breakpoints.down(800)]: {
    visibility: 'hidden',
  },
}));

const SxTypography = styled(Typography)(({ theme }) => ({
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
}));

interface SxListItemProps extends ListItemTextProps {
  selected?: boolean;
}

const SxListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isPlaying',
})<SxListItemProps>(({ theme, selected }) => ({
  '& .MuiListItemText-primary': {
    color: selected ? '#1DB954' : theme.palette.common.white,
    fontSize: '1rem',
  },
  '& .MuiListItemText-secondary': {
    color: theme.palette.neutral[100],
    fontSize: '.875rem',
  },
}));
