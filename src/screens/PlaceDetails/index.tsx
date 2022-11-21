import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';

// Components
import LoadingOverlay from '../../components/ui/LoadingOverlay';
// Types
import Place from '../../models/Place';
import { RootStackParamList } from '../../routes/types';
// Services
import { fetchPlaceById } from '../../services/database';
// Styles
import * as S from './styles'

type Props = StackScreenProps<RootStackParamList, 'PlaceDetails'>;

const PlaceDetailsScreen = ({ route, navigation}: Props) => {
    const [place, setPlace] = useState<Place | null>(null)

    const {
        address,
        imageUri,
        location,
        title
    } = place || {}

    const showOnMapHandler = () => {}

    const selectedPlaceId = route.params.placeId

    useEffect(() => {
        const loadPlace = async () => {
            const place = await fetchPlaceById(selectedPlaceId)
            setPlace(place)

            navigation.setOptions({
                title: place.title
            })
        }

        loadPlace()
    }, [selectedPlaceId])

    if (!place) return <LoadingOverlay />

    return (
        <S.ScrollWrapper>
            <S.Image source={{uri: imageUri}}/>
            <S.LocationView>
                <S.AddressView>
                    <S.AddressText>{address}</S.AddressText>
                </S.AddressView>
                <Button 
                    icon='map' 
                    onPress={showOnMapHandler}
                >
                    View on map
                </Button>
            </S.LocationView>
        </S.ScrollWrapper>
    )
}

export default PlaceDetailsScreen