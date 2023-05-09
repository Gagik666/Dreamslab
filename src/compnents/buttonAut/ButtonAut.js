import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const ButtonAut = ({ backgroundColor, borderColor, txtColor, text, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.touch, { backgroundColor: backgroundColor, borderColor: borderColor }]}
            onPress={onPress}>
            <Text style={[styles.txt, { color: txtColor }]}>{text}</Text>
        </TouchableOpacity>
    )
}

