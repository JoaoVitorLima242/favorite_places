import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import * as S from './styles'

type FormFields = {
    title: string;
}

const PlaceForm = () => {
    const { control, handleSubmit } = useForm<FormFields>()

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
        </S.Wrapper>
    )
}

export default PlaceForm