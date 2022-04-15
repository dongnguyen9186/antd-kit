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
    regular: number;
    medium: number;
    semibold: number;
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
  palette: Record<string, Hue>;
}

const fontSizes = {
  xs: '11px',
  sm: '13px',
  md: '16px',
  lg: '20px',
  xl: '28px',
  xxl: '32px',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,

};

const lineHeights = {
  xs: `17px`,
  sm: `19px`,
  md: `24px`,
  lg: `25px`,
  xl: `35px`,
  xxl: `40px`
};

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
};

/** @component */
export default DEFAULT_THEME;