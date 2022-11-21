import { ActivityIndicator } from 'react-native'
import { defaultTheme } from '../../../assets/styles/theme'
import * as S from './styles'

const LoadingOverlay = () => {
    return (
        <S.Wrapper>
            <ActivityIndicator 
                size='large'
                color={defaultTheme.colors.primary500}
            />
        </S.Wrapper>
    )
}

export default LoadingOverlay