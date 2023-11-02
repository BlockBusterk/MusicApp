
import { FlatList, Text, View } from 'react-native';
import TrackListItem from '../TrackListItem';
import { tracks } from '../../assets/data/tracks';
const HomeScreen = () => {
    return (
      <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
    />
      );
}

export default HomeScreen