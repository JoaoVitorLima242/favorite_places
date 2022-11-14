import styled, { css } from "styled-components/native";

export const Fallback = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center
`

export const FallbackText = styled.Text`
    ${({theme}) => css`
        font-size: 17px;
        color: ${theme.colors.primary100};
        font-weight: 600;
    `}
`
