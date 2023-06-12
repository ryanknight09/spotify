export const assignRandomColor = (
  index: number,
  assignedColors: { [key: number]: string }
): string => {
  let randomColor: string;

  do {
    randomColor = getRandomColor(); // Generate a random color
  } while (
    assignedColors[index - 1] === randomColor || // Check if previous color is the same
    assignedColors[index - 2] === randomColor // Check if color before the previous one is the same
  );

  assignedColors[index] = randomColor; // Store the assigned color

  return randomColor;
};

const getRandomColor = () => {
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
