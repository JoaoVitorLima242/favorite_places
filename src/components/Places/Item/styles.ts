import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
    ${({theme}) => css`
        background-color: ${theme.colors.primary500};
        flex-direction: row;
        align-items: flex-start;
        border-radius: 6px;
        elevation: 2;
        border-radius: 4px;
        overflow: hidden;
        margin: 12px 12px 0;
    `}
`

export const Image = styled.Image`
    flex: 1;
    height: 100px;
`

export const Information = styled.View`
    flex: 2;
    padding: 12px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 18px;
        color: ${theme.colors.gray700};
    `}
`
export const Address = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        color: ${theme.colors.gray700};
    `}
`