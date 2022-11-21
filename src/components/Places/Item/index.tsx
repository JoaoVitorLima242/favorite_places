// Styles
import * as S from './styles'
// Types
import Place from "../../../models/Place"
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { useNavigation } from '@react-navigation/native'

type Props = {
    place: Place
}

type TUseNavigation = StackNavigationProp<RootStackParamList>

const PlaceItem = ({ place }: Props) => {
    const navigation = useNavigation<TUseNavigation>()

    const {
        imageUri,
        title,
        address,
        id
    } = place

    const onPressHandler = () => {
        navigation.navigate('PlaceDetails', {
            placeId: id
        })
    }

    return (
        <S.Wrapper
            activeOpacity={0.9}
            onPress={onPressHandler}
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