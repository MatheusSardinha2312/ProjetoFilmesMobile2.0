import { ActivityIndicator, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from './src/components/cards';
import { useEffect, useState } from 'react';

export default function movies() {

    const Url = 'https://api.otaviolube.com/api/filmes?populate=*'
    var [filmes, setFilmes] = useState([])

    useEffect(() => {

        fetch(Url).then(data => data.json()).then(object => { setFilmes(object.data)
        })
    }, [])

    return (

        <SafeAreaView style={styles.container}>
        {filmes.length > 0 ? <ScrollView horizontal> { filmes.map(filme =>
          <Card key={filme.id} filme={filme.attributes}/>)
        }

        </ScrollView>
          :
          <View style={styles.actContainer}>
              <ActivityIndicator size='large' color='#940BE2'/>
              <Text style={styles.loading}>carregando...</Text>
          </View>}
      </SafeAreaView>

    )
}

const styles = StyleSheet.create({
  
  actContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
      backgroundColor: '#fff',
      flex: 1
  }

});