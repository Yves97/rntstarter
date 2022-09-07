/**
 * Built In
*/
import React, {useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'

/**
 * External
*/

/**
 * Internal
*/
import { assets } from '../../assets'

const Welcome = () => {
    const [message,setMessage] = useState('Welcome - My react native template')
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontFamily : assets.fontFamily.MontserratRegular
    }
})

export default Welcome
