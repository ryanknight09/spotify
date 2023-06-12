import { useState } from 'react';

export const useRandomColorAssigner = (): ((index: number) => string) => {
  const [assignedColors, setAssignedColors] = useState<{
    [key: number]: string;
  }>({});

  const assignRandomColor = (index: number): string => {
    if (assignedColors[index]) {
      return assignedColors[index];
    }

    let randomColor: string;

    do {
      randomColor = getRandomColor();
    } while (
      assignedColors[index - 1] === randomColor ||
      assignedColors[index - 2] === randomColor
    );

    const updatedColors = { ...assignedColors };
    updatedColors[index] = randomColor;
    setAssignedColors(updatedColors);

    return randomColor;
  };

  return assignRandomColor;
};

export const getRandomColor = () => {
  const genreColors = [
    '#55A891',
    '#27856A',
    '#5F8109',
    '#F037A5',
    '#AF2896',
    '#477D95',
    '#509BF5',
    '#1D3164',
    '#E8115B',
    '#E13300',
    '#BA5D07',
  ];

  return genreColors[Math.floor(Math.random() * genreColors.length)];
};
