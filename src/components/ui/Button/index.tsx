import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'
import { defaultTheme } from '../../../assets/styles/theme';

type Props = {
    onPress?: ((event: GestureResponderEvent) => void);
    icon?: keyof typeof Ionicons.glyphMap;
    children: ReactNode;
    outline?: boolean;
}

const Button = ({ onPress, children, icon, outline }: Props) => {
    return (
        <S.Wrapper 
            onPress={onPress} 
            outline={outline}
        >
            {icon && <S.Icon name={icon} size={18} color={defaultTheme.colors.primary500}/>}
            <S.Text outline={outline}>{children}</S.Text>
        </S.Wrapper>
    )
}

export default Button