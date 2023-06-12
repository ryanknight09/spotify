// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ColorThief from 'colorthief';
import { useState } from 'react';

export const useDominantImgColor = (imageUrl: string) => {
  const [color, setColor] = useState('');

  if (!imageUrl) return 'rgba(136,136,136)';

  const colorThief = new ColorThief();
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    const palletes = colorThief.getPalette(img);
    const [r, g, b] = palletes[3];
    setColor(`rgba(${r},${g},${b})`);
  };

  img.src = imageUrl;

  return color;
};
