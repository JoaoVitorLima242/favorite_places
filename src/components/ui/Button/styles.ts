import styled, { css } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'

export const Wrapper = styled.TouchableOpacity`
    ${({theme}) => css`
        padding: 6px 12px;
        margin: 4px;
        justify-content: center;
        align-items: center;
        border: solid 1px ${theme.colors.primary500};
        flex-direction: row;
    `}
`

export const Text = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.primary500};
    `}
`

export const Icon = styled(Ionicons)`
    margin-right: 6px;
`