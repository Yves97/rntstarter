/**
 * Built In
*/
import React, {useState, FC} from 'react'
import {Text, View, StyleSheet} from 'react-native'

/**
 * External
*/

/**
 * Internal
*/
import { assets } from '../../assets'


type Props = {

}

export const Welcome: FC<Props> = () => {
    const [message, setMessage] = useState<string>('Welcome - My react native template')
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
