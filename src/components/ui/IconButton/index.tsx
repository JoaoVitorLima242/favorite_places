import { Ionicons } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native';

import * as S from './styles'

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
    onPress?: ((event: GestureResponderEvent) => void)
}

const IconButton = ({icon, size, color, onPress}: Props) => {
    return (
        <S.Wrapper onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </S.Wrapper>
    )
}

export default IconButton