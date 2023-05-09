import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import { ArowRightSVGIcone } from '../../../assets/icones/ArowRightSVGIcone'
import { ArrowLeftSVGIcone } from '../../../assets/icones/ArrowLeftSVGIcone'
import { DrawerGeneralButton } from '../../../compnents/drawerGeneralButton/DrawerGeneralButton'
import { ButtonAut } from '../../../compnents/buttonAut/ButtonAut'
import { COLOR } from '../../../assets/colors/Colors'


export const DrawerContent = (props) => {

    const [menu, setMenu] = useState(true)

    const onTitle = () => {
        setMenu(!menu)
    }

    const generalContent = () => {
        return (
            <View >
                <DrawerGeneralButton txt="Ծրագրեր" onNav={() => props.navigation.navigate("Programs")} />
                <DrawerGeneralButton txt="Ստանալ հավաստագիր" onNav={() => props.navigation.navigate("Certificat")} />
                <DrawerGeneralButton txt="Քննարկումներ" onNav={() => props.navigation.navigate("Discussions")} />
                <View style = {{width: "100%", alignItems: "center"}}>
                     <ButtonAut
                      backgroundColor={COLOR.buttonSignIn}
                      borderColor={COLOR.buttonSignIn} 
                      text="Գրանցվել"
                      txtColor={COLOR.white}/>
                     <ButtonAut
                      backgroundColor={COLOR.buttonSignUp}
                      borderColor={COLOR.drawerText} 
                      text="Մուտք"
                      txtColor={COLOR.drawerText}/>
                </View>
            </View>
        )
    }

    const coursesNameContent = () => {
        return (
            <View>
                <Text style={styles.txtDrawer}>Name</Text>
            </View>
        )
    }

    const cursesItemContent = () => {
        return (
            <View>
                <Text>Item</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.мiewDrawerTop}>
                {
                    menu ?
                        <TouchableOpacity style={styles.touchDrawerCourses} onPress={onTitle}>
                            <Text style={styles.txtDrawer}>Դասընթացներ</Text>
                            <ArowRightSVGIcone />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.touchDrawerMenu} onPress={onTitle}>
                            <ArrowLeftSVGIcone />
                            <Text style={styles.txtDrawer}>Menu</Text>
                        </TouchableOpacity>
                }
            </View>
            {
                menu
                    ?
                    generalContent()
                    :
                    coursesNameContent()
            }
        </View>
    )
}

