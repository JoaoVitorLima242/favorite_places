import { Control, ControllerFieldState, FieldValues, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import * as S from './styles'

type Props = {
    label?: string;
    textInputConfig?: TextInputProps;
    name: string;
    defaultValue?: string;
    control: Control<any>
}

const Input = ({ 
    label, 
    control, 
    defaultValue, 
    name,
    textInputConfig
}: Props) => {
    const { field } = useController({
        name,
        control,
        defaultValue
    })
    return (
        <S.Wrapper>
            <S.Label>{label}</S.Label>
            <S.Input
                value={field.value}
                onChangeText={field.onChange}
                {...textInputConfig}
            />
        </S.Wrapper>
    )
}

export default Input