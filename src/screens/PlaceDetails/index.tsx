import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import Button from '../../components/ui/Button'
import { RootStackParamList } from '../../routes/types';
import * as S from './styles'

type Props = StackScreenProps<RootStackParamList, 'PlaceDetails'>;

const PlaceDetailsScreen = ({ route }: Props) => {
    const showOnMapHandler = () => {}

    const selectedPlaceId = route.params.placeId

    useEffect(() => {
        console.log(selectedPlaceId)
    }, [selectedPlaceId])

    return (
        <S.ScrollWrapper>
            <S.Image />
            <S.LocationView>
                <S.AddressView>
                    <S.AddressText>ADDRESS</S.AddressText>
                </S.AddressView>
            </S.LocationView>
            <Button 
                outline 
                icon='map' 
                onPress={showOnMapHandler}
            >
                View on map
            </Button>
        </S.ScrollWrapper>
    )
}

export default PlaceDetailsScreen