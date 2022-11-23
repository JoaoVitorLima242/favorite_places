import { ReactNode, useEffect } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'
import { defaultTheme } from '../../../assets/styles/theme';

type Props = {
    onPress?: ((event: GestureResponderEvent) => void);
    icon?: keyof typeof Ionicons.glyphMap;
    children: ReactNode;
    outline?: boolean;
    color?: 'danger'
}

const Button = ({ onPress, children, icon, outline, color}: Props) => {
    
    const switchIconColorHandler = () => {
        if (color === 'danger') {
            return defaultTheme.colors.secondary500;
        } else if (outline) {
            return defaultTheme.colors.primary500;
        } else {
            return defaultTheme.colors.primary800
        }
    }

    let iconColor = switchIconColorHandler()

    return (
        <S.Wrapper 
            onPress={onPress} 
            outline={outline}
            color={color}
        >
            {icon && <S.Icon name={icon} size={18} color={iconColor}/>}
            <S.Text color={color} outline={outline}>{children}</S.Text>
        </S.Wrapper>
    )
}

export default Button