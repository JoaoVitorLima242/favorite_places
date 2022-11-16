import Button from '../Button'
import * as S from './styles'

const LocationPicker = () => {
    const getLocationHandler = () => {

    }

    const pickOnMapHandler = () => {

    }

    return (
        <S.Wrapper>
            <S.MapPreview>
                
            </S.MapPreview>
            <S.Buttons>
                <Button icon='location' onPress={getLocationHandler}>Locate User</Button>
                <Button icon='map' onPress={pickOnMapHandler}>Pick on Map</Button>
            </S.Buttons>
        </S.Wrapper>
    )
}

export default LocationPicker