import styled, { css } from "styled-components/native";

export const Wrapper = styled.View``

export const MapPreview = styled.View`
    ${(({theme}) => css`
        height: 200px;
        width: 100%;
        margin: 8px 0;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.primary100};
        border-radius: 4px;
    `)}
`

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

