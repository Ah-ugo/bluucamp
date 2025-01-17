import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const Posts = ({name, profile, photo, onPress}) => {
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 25,
          alignItems: 'center',
        }}>
        <View style={{width: '20%'}}>
          <Image
            source={profile}
            style={{
              width: 45,
              height: 45,
              borderRadius: 13,
            }}
          />
        </View>
        <View
          style={{
            width: '60%',
          }}>
          <Text
            style={{
              fontFamily: 'Bold',
              fontSize: 14,
              color: '#044244',
            }}>
            {name}
          </Text>

          <Text
            style={{
              fontFamily: 'Medium',
              fontSize: 12,
              color: '#9ca1a2',
            }}>
            2 mins ago
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
          }}>
          <Icon name="sound-mix" color="#044244" size={20} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingTop: 20,
        }}>
        <ImageBackground
          source={photo}
          style={{
            width: '100%',
            height: 220,
          }}
          imageStyle={{
            borderRadius: 30,
          }}>
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                marginBottom: 20,
                borderRadius: 5,
                padding: 5,
                backgroundColor: '#e8e8e8',
              }}>
              <Icon name="forward" color="#044244" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onLike}
              style={{
                marginBottom: 20,
                borderRadius: 5,
                padding: 5,
                backgroundColor: '#e8e8e8',
                marginLeft: 10,
                marginRight: 20,
              }}>
              <Icon
                name={liked === true ? 'heart' : 'heart-outlined'}
                color={liked === true ? 'red' : '#044244'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Posts;
