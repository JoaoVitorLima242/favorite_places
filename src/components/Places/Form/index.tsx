import { useForm } from 'react-hook-form'

// Components
import Button from '../../ui/Button';
import ImagePicker from '../../ui/ImagePicker';
import Input from '../../ui/Input'
import LocationPicker from '../../ui/LocationPicker';
// Styles
import * as S from './styles'
// Types
import { TLocation } from '../../../models/Place/index.d'
// Helpers
import { getAddress } from '../../../helpers/location';

export type FormFields = {
    title: string;
    location: TLocation;
    image: string;
}

export type FormValuesNames = 'title' | 'location' | 'image';

const PlaceForm = () => {
    const { control, handleSubmit } = useForm<FormFields>()

    const onSubmit = async ({image, location, title}: FormFields) => {
        
        console.log(location, 'teste')
        const address = await getAddress(location)

        console.log(address)
    }

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
            <ImagePicker 
                control={control}
                name='image'
            />
            <LocationPicker 
                control={control}
                name='location'
            />
            <Button 
                onPress={handleSubmit(onSubmit)}
            > 
                Save Location
            </Button>
        </S.Wrapper>
    )
}

export default PlaceForm