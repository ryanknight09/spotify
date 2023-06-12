import { useMediaQuery, useTheme } from '@mui/material';

type BnumbertInvervals = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
};

const MqBreakpoints = {
  largerMq: 9,
  xxxlMq: 8,
  xxlMq: 7,
  xlMq: 6,
  lgMq: 5,
  mdMq: 4,
  smMq: 3,
  xsMq: 2,
};

const defaultIntervals: BnumbertInvervals = {
  xs: 800,
  sm: 1030,
  md: 1250,
  lg: 1450,
  xl: 1730,
  xxl: 1960,
  xxxl: 2180,
};

export const useResponsiveCards = ({
  intervals = defaultIntervals,
}: {
  intervals?: BnumbertInvervals;
}) => {
  const { breakpoints: bp } = useTheme();
  const { xs, sm, md, lg, xl, xxl, xxxl } = intervals;

  const xsMq = useMediaQuery(bp.between(0, xs));
  const smMq = useMediaQuery(bp.between(xs, sm));
  const mdMq = useMediaQuery(bp.between(sm, md));
  const lgMq = useMediaQuery(bp.between(md, lg));
  const xlMq = useMediaQuery(bp.between(lg, xl));
  const xxlMq = useMediaQuery(bp.between(xl, xxl));
  const xxxlMq = useMediaQuery(bp.between(xxl, xxxl));
  const largerMq = useMediaQuery(bp.up(xxxl));

  const matches = {
    xsMq,
    smMq,
    mdMq,
    lgMq,
    xlMq,
    xxlMq,
    xxxlMq,
    largerMq,
  };

  for (const breakpoint in matches) {
    if (matches[breakpoint as keyof typeof matches]) {
      return MqBreakpoints[breakpoint as keyof typeof MqBreakpoints];
    }
  }
  return 2; // Default to 2 cards if no breakpoint matches
};
