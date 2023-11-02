import { FlatList, Text, View } from 'react-native';
import { tracks } from '../../assets/data/tracks';
import TrackListItem from '../TrackListItem';

const FavoritesScreen = () => {
  return (
    <FlatList
    data={tracks}
    renderItem={({ item }) => <TrackListItem track={item} />}
  />
    );
}

export default FavoritesScreen