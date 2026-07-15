export interface BrandTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textSecondary: string;
    buttonText: string;
  };
  typography: {
    fontSize: {
      heading: number;
      body: number;
      caption: number;
    };
    fontWeight: {
      regular: string;
      bold: string;
    };
  };
}

export type Theme = BrandTheme;
