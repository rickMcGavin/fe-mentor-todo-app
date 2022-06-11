// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    media: {
      [key: string]: string;
    };
    breakpoints: {
      [key: string]: number;
    };
  }
}
