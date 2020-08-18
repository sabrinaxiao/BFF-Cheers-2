import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList, TouchableOpacity} from 'react-native';

export default function addCheers({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler= (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="Write Cheers here!"
            onChangeText={changeHandler}
            />
            <TouchableOpacity 
            style={styles.button}
            onPress={() =>submitHandler(text)}
            >
                <Text style={{color: 'white'}}>Submit Cheers!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    button:{
        alignItems: "center",
        backgroundColor: "indianred",
        padding: 10,
    }
})