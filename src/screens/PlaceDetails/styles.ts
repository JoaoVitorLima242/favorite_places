import styled, { css } from "styled-components/native";

export const ScrollWrapper = styled.ScrollView`
`

export const Image = styled.Image`
    height: 35%;
    min-height: 300px;
    width: 100%;
`

export const LocationView = styled.View`
    justify-content: center;
    align-items: center;
`

export const AddressView = styled.View`
    padding: 20px;
`


export const AddressText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.primary500};
        font-weight: bold;
        font-size: 16px;
        text-align: center;
    `}
`