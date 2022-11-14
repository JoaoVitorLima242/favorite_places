import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
    children: ReactNode;
}

const FallbackView = ({children}: Props) => {
    return (
        <S.Fallback>
            <S.FallbackText>{children}</S.FallbackText>
        </S.Fallback>
    )
}

export default FallbackView