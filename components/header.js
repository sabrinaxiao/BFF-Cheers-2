import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Cheers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingTop: 55,
        backgroundColor: 'indianred'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})