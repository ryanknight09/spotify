declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
  }

  interface Palette {
    neutral: Palette['primary'];
    genre: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    genre: PaletteOptions['primary'];
  }
}
export {};
