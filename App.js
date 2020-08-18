import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList} from 'react-native';
import Header from './components/header';
import CheersItem from './components/CheersItem'
import AddCheers from './components/addCheers'

export default function App() {
  const[cheers,setCheers] = useState([
    {text: 'Cheers to Madhu for being a good sport', key: '0'},
    {text: 'Cheers to Anushka for being so nice', key: '1'},
    {text: 'Cheers to Mansoor for being a good boss', key:'2'}
  ]);
  const submitHandler = (text) => {
    setCheers((prevCheers) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevCheers
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddCheers submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
          data = {cheers}
          renderItem={({item}) => (
            <CheersItem item={item}/>
          )}
          />
        </View>
      </View>
    </View>

  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list: {
    marginTop: 20,

  }
})
