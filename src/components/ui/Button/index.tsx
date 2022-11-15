import { GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'
import { ReactNode } from 'react';
import { defaultTheme } from '../../../assets/styles/theme';

type Props = {
    onPress?: ((event: GestureResponderEvent) => void);
    icon: keyof typeof Ionicons.glyphMap;
    children: ReactNode;
}

const Button = ({ onPress, children, icon }: Props) => {
    return (
        <S.Wrapper onPress={onPress}>
            <S.Icon name={icon} size={18} color={defaultTheme.colors.primary500}/>
            <S.Text>{children}</S.Text>
        </S.Wrapper>
    )
}

export default Button