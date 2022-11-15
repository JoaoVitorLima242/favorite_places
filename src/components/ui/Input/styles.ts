import styled, { css } from "styled-components/native";

export const Wrapper = styled.View``

export const Label = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        margin-bottom: 4;
        color: ${theme.colors.primary500}
    `}
`

export const Input = styled.TextInput`
    ${({ theme }) => css`
        margin: 8px 0px;
        padding: 8px 4px;
        font-size: 16px;
        border-radius: 4px;
        background-color: ${theme.colors.primary100}
    `}
`