import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const DrawerGeneralButton = ({txt, onNav}) => {
  return (
    <TouchableOpacity style = {styles.container} onPress = {onNav}>
      <Text style = {styles.txtDrawer}>{txt}</Text>
    </TouchableOpacity>
  )
}

