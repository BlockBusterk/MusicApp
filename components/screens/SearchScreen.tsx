import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TrackListItem from '../TrackListItem';
import { tracks } from '../../assets/data/tracks';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
export default function SearchScreen() {
	const [search, setSearch] = useState('');

	return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" size={16} color="gray" />
        <TextInput
          value={search}
          placeholder="What do you want to listen to?"
          onChangeText={setSearch}
          style={styles.input}
        />
        <Text style={{color:'white'}}>Cancel</Text>
      </View>

      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#121314',
    color: 'white',
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
  },
});