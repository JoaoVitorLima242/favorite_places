import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary50: string;
            primary100: string;
            primary200: string;
            primary400: string;
            primary500: string;
            primary700: string;
            primary800: string;
            accent500: string;
            gray700: string;
            secondary500: string;
        }
    }
}