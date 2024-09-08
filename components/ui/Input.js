import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SHADOWS, SIZES } from '../../constants/theme';
import * as Haptics from 'expo-haptics';
import { EyeIcon, EyeSlashIcon, SparklesIcon, SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

export default Input = ({ type, onTextChange, label, setInputError, setInputErrorMessage, labelTitle, description, ...props }) => {
    const [value, setValue] = useState(props.value ? props.value : '');
    const [error, setError] = useState(setInputError ? setInputError : false);
    const [errorMessage, setErrorMessage] = useState(setInputErrorMessage ? setInputErrorMessage : '');
    const [showPassword, setShowPassword] = useState(true);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        if (type === 'phone') {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setInputErrorMessage ? setInputErrorMessage : '');
        } else if (type === 'email') {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setErrorMessage ? setInputErrorMessage : '');
        } else if (type === 'password') {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setInputErrorMessage ? setInputErrorMessage : '');
        } else if (description !== "") {
            setShowDescription(true);
        }
    }, [value, setInputError, setInputErrorMessage, description, type]);



    let keyboardType = 'default';

    if (type === 'numeric') {
        keyboardType = 'numeric';
    }

    if (type === 'email') {
        keyboardType = 'email-address';
    }

    if (type === 'phone') {
        keyboardType = 'phone-pad';
    }

    const hapticFeedback = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    return (
        <View style={[tw`mb-3`, props.containerStyle]}>
            {label && (
                <Text style={[tw`text-sm `, { fontFamily: FONT.medium, color: COLORS.gray }]}>{labelTitle ? labelTitle : ''}</Text>
            )}
            <View style={[tw`relative`]}>

                <TextInput
                    placeholderTextColor={COLORS.gray2}
                    onFocus={() => {
                        props.onFocus && props.onFocus();
                    }}

                    keyboardAppearance='light'
                    onKeyPress={() => {
                        props.onKeyPress && props.onKeyPress();
                        hapticFeedback();
                    }}
                    secureTextEntry={type === 'password' && showPassword ? true : false}
                    selectionColor={COLORS.primary}
                    value={value}
                    onChangeText={(text) => { setValue(text); onTextChange && onTextChange(text); }}
                    onBlur={() => {
                        props.onBlur && props.onBlur();
                    }}
                    style={[tw`px-4 py-3 rounded-lg `, { borderRadius: SIZES.small, fontFamily: FONT.regular, fontSize: SIZES.medium, backgroundColor: COLORS.white2, shadowColor: SHADOWS.small.shadowColor, shadowRadius: SHADOWS.small.shadowRadius, shadowOpacity: SHADOWS.small.shadowOpacity - 12, borderWidth: 0.8, borderColor: COLORS.gray2, shadowOffset: SHADOWS.small.shadowOffset }, props.style]}
                    keyboardType={keyboardType}
                    returnKeyType='done'
                    {...props}
                />
                {type === 'password' &&
                    (showPassword ? <EyeIcon onPress={() => setShowPassword(!showPassword)} style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} /> : <EyeSlashIcon onPress={() => setShowPassword(!showPassword)} style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} />)

                }
            </View>
            {error && <Text style={[tw`text-sm text-red-500`, { fontFamily: FONT.medium }]}>{errorMessage}</Text>}
            {showDescription && <Text style={[tw`text-xs mt-1 text-gray-400`, { fontFamily: FONT.medium }]}>{description}</Text>}

        </View>
    );
};


