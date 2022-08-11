import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    outColor: string;
    boxShadow: {
      default: string;
      active: string;
    };
  }
}
