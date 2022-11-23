import styled, { css, DefaultTheme } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'

type TButton = {
    outline?: boolean;
    color?: 'danger';
}

const wrapperModifiers = {
    outline: () => css`
        background-color: transparent;
    `,
    danger: (theme: DefaultTheme) => css`
        border: solid 1px ${theme.colors.secondary500};
    `
}

const textModifiers = {
    outline: (theme: DefaultTheme) => css`
        color: ${theme.colors.primary500};
    `,
    danger: (theme: DefaultTheme) => css`
        color: ${theme.colors.secondary500};
   `

}

export const Wrapper = styled.TouchableOpacity<TButton>`
    ${({theme, outline, color}) => css`
        padding: 6px 12px;
        margin: 4px 0;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border: solid 1px ${theme.colors.primary500};
        background-color: ${theme.colors.primary500};
        border-radius: 4px;

        ${color && wrapperModifiers[color](theme)}
        ${outline && wrapperModifiers.outline()}
    `}
`

export const Text = styled.Text<TButton>`
    ${({theme, outline, color}) => css`
        color: ${theme.colors.primary800};
        font-weight: 700;

        ${outline && textModifiers.outline(theme)}
        ${outline && color && textModifiers['danger'](theme)}
    `}
`

export const Icon = styled(Ionicons)`
    margin-right: 6px;
`