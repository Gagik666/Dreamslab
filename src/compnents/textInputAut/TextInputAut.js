import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Style'

const TextInputAut = () => {
  return (
    <View style = {{padding: 10}}>
        <View>

             <Text>TextInputAut</Text>
        </View>
        <View style = {styles.txtInputView}>
            <TextInput style = {styles.txtInput}/>
        </View>
    </View>
  )
}

export default TextInputAut