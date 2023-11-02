import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { usePlayerContext } from '../providers/PlayerProvider';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';




const Player = () => {
  const { track } = usePlayerContext();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Sound>();

	useEffect(() => {
   playTrack();
  }, [track]);

	const playTrack = async () => {
    if(sound)
    {
     await sound.stop()
    }
    if (!track?.preview_url) {
      return;
    }
  
     const audio = await new Sound(track.preview_url)
     setSound(audio)
    await sound?.play();
  };

  if (!track) {
    return null;
  }

  const image = track.album.images?.[0];
  

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        {image && <Image source={{ uri: image.url }} style={styles.image} />}

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
        </View>

        <Icon
          name={'heart-o'}
          size={20}
          color={'white'}
          style={{ marginHorizontal: 10 }}
        />
        <Icon
          disabled={!track?.preview_url}
          name={'play'}
          size={22}
          color={track?.preview_url ? 'white' : 'gray'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: -75,
    height: 75,
    padding: 10,
  },
  player: {
    backgroundColor: '#286660',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 3,
    paddingRight: 15,
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: 'lightgray',
    fontSize: 12,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default Player;