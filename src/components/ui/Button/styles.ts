import styled, { css, DefaultTheme } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'

type TWrapper = {
    outline?: boolean;
}

const wrapperModifiers = {
    outline: (theme: DefaultTheme) => css`
        background-color: transparent;
    `
}

const textModifiers = {
    outline: (theme: DefaultTheme) => css`
        color: ${theme.colors.primary500};
    `
}

export const Wrapper = styled.TouchableOpacity<TWrapper>`
    ${({theme, outline}) => css`
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border: solid 1px ${theme.colors.primary500};
        background-color: ${theme.colors.primary500};
        border-radius: 4px;


        ${outline && wrapperModifiers.outline(theme)}
    `}
`

export const Text = styled.Text<TWrapper>`
    ${({theme, outline}) => css`
        color: ${theme.colors.primary800};
        font-weight: 700;

        ${outline && textModifiers.outline(theme)}
    `}
`

export const Icon = styled(Ionicons)`
    margin-right: 6px;
`