import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useLayoutEffect, useState } from 'react';
import Button from '../../components/ui/Button';

// Components
import LoadingOverlay from '../../components/ui/LoadingOverlay';
// Types
import Place from '../../models/Place';
import { RootStackParamList } from '../../routes/types';
// Services
import { deletePlace, fetchPlaceById } from '../../services/database';
// Styles
import * as S from './styles'

type Props = StackScreenProps<RootStackParamList, 'PlaceDetails'>;

const PlaceDetailsScreen = ({ route, navigation}: Props) => {
    const [place, setPlace] = useState<Place | null>(null)

    const {
        address,
        imageUri,
        location,
        title,
        id
    } = place || {}

    const selectedPlaceId = route.params.placeId

    const showOnMapHandler = () => {
        navigation.navigate('Map', {
            initialLocation: location
        })
    }

    const deleteItemById = async () => {
        const response = await deletePlace(id as number)
        console.log(response)
        navigation.navigate('AllPlaces')
    }

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
            <S.DeleteView>
                <Button 
                    color='danger'
                    outline 
                    icon='trash'
                    onPress={deleteItemById}
                >
                    Delete Place
                </Button>
            </S.DeleteView>
        </S.ScrollWrapper>
    )
}

export default PlaceDetailsScreen