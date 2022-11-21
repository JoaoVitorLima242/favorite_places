// Styles
import * as S from './styles'
// Types
import Place from "../../../models/Place"

type Props = {
    place: Place
}

const PlaceItem = ({ place }: Props) => {
    const {
        imageUri,
        title,
        address
    } = place

    return (
        <S.Wrapper
            activeOpacity={0.9}
        >
            <S.Image source={{uri: imageUri}}/>
            <S.Information>
                <S.Title>{title}</S.Title>
                <S.Address>{address}</S.Address>
            </S.Information>
        </S.Wrapper>
    )
}

export default PlaceItem