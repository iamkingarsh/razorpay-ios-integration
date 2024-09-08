import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const Button = ({ variant, onPress, children, ...props }) => {

    const [buttonStyle, setButtonStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`py-4 my-2 rounded-xl`, { backgroundColor: COLORS.primary }, props.style,];
            case 'secondary':
                return [tw`py-4 my-2 rounded-xl`, { backgroundColor: COLORS.tertiary }, props.style];
            case 'disabled':
                return [tw`py-4 my-2 rounded-xl`, { backgroundColor: COLORS.gray2 }, props.style];
                case 'productButton':
                return [tw`py-4 my-2 rounded-xl `, { backgroundColor: COLORS.primary, width: '100%' }, props.style];
            default:
                return [tw`py-4 my-2 rounded-xl`, { backgroundColor: COLORS.white }, props.style];
        }
    });

    const [textStyle, setTextStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`text-center `, { color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium }];
            case 'secondary':
                return [tw`text-center `, { color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium }];
            case 'disabled':
                return [tw`text-center `, { color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium }];
            default:
                return [tw`text-center `, { color: COLORS.black, fontFamily: FONT.semiBold, fontSize: SIZES.medium }];
        }
    });

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;
