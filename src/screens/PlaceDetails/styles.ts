import styled, { css } from "styled-components/native";
import Button from "../../components/ui/Button";

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

export const DeleteView = styled.View`
    margin-top: 130px;
    justify-content: center;
    align-items: center;
`