import { Box, Stack, Typography, styled } from '@mui/material';

export const Hero = ({
  imgUrl,
  name,
  followerCount,
}: {
  imgUrl: string;
  name: string;
  followerCount: number;
}) => (
  <HomeWrapper>
    <ImageContainer>
      <HeroImage src={imgUrl} alt="hero-pic" />
    </ImageContainer>
    <InfoWrapper>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Profile
      </Typography>
      <DisplayName variant="h1">{name}</DisplayName>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 400 }}
      >{`${followerCount} followers`}</Typography>
    </InfoWrapper>
  </HomeWrapper>
);

const HomeWrapper = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  height: '13.5rem',
  width: '13.5rem',
  minWidth: '12rem',
  alignSelf: 'flex-end',
  marginRight: '1.5rem',
  [theme.breakpoints.down(1280)]: {
    height: '12rem',
    width: '12rem',
  },
}));

const HeroImage = styled('img')(() => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 4px 60px rgba(0,0,0,.5)',
}));

const InfoWrapper = styled(Stack)(() => ({
  color: 'white',
  justifyContent: 'flex-end',
  flex: 1,
}));

const DisplayName = styled(Typography)(({ theme }) => ({
  width: '100%',
  margin: '0.08em 0px 0.12em',
  fontWeight: 900,
  [theme.breakpoints.down(1080)]: {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.down(950)]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down(830)]: {
    fontSize: '2rem',
  },
}));
