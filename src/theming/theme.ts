import PALETTE from './palette';
type Hue = Record<number | string, string> | string;

export interface ITheme {
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontWeights: {
    thin: number;
    extralight: number;
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  iconSizes: {
    sm: string;
    md: string;
    lg: string;
  };
  lineHeights: {
    xs: string,
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  whiteSpaces: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  palette: Record<string, Hue>;
}

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '20px',
  xxl: '28px',
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const lineHeights = {
  xs: `15px`,
  sm: `18px`,
  md: `21px`,
  lg: `24px`,
  xl: `25px`,
  xxl: `35px`
};

const whiteSpaces = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
}

const iconSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '28px',
  xxl: '32px'
};


const DEFAULT_THEME: ITheme = {
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  palette: PALETTE,
  whiteSpaces
};

/** @component */
export default DEFAULT_THEME;