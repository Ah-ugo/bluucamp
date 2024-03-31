<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Posts from '../screens/Posts';

export const Home = ({navigation}) => {
  const [popularSelected, setPopularSelected] = useState(true);

  const onTabPressed = () => {
    setPopularSelected(!popularSelected);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: '100%',
        backgroundColor: '#044244',
      }}>
      <View
        style={{
          height: 260,
          width: '100%',
          paddingHorizontal: 35,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingTop: 40,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '50%',
            }}>
            <Image
              source={require('../images/Untitled.png')}
              style={{width: 20, height: 20}}
            />
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'flex-end',
            }}>
            <Icon
              name="dots-two-vertical"
              size={22}
              color="#d2d2d2"
              style={{
                marginRight: -7,
                marginTop: 7,
              }}
            />
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Bold',
            fontSize: 25,
            color: '#FFF',
            paddingVertical: 25,
          }}>
          Find Awesome Photos
=======
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import CourseList from './CourseList';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../images/Home.png')}
      style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#d1a0a7',
            }}>
            <Image
              source={require('../images/hum.png')}
              style={{height: 15, width: 20}}
            />
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            fontFamily: 'Bold',
            color: '#FFF',
          }}>
          Welcome back Mikolaj
>>>>>>> 1629659a8d549c9c7c03b6e975287b26f079e2bc
        </Text>

        <View
          style={{
            flexDirection: 'row',
<<<<<<< HEAD
            borderColor: '#9ca1a2',
            borderRadius: 20,
            borderWidth: 0.2,
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="search inispiration ..."
            style={{
              paddingHorizontal: 20,
              fontFamily: 'Medium',
              fontSize: 11,
              width: '90%',
              color: '#9ca1a2',
            }}
          />
          <Icon name="magnifying-glass" size={15} color="#9ca1a2" />
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#FFF',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 1000,
          paddingHorizontal: 35,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={onTabPressed}
            style={{
              borderBottomColor: popularSelected ? '#044244' : '#FFF',
              borderBottomWidth: 4,
              paddingVertical: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Bold',
                color: popularSelected ? '#044244' : '#9ca1a2',
              }}>
              MOST POPULAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onTabPressed}
            style={{
              borderBottomColor: popularSelected ? '#FFF' : '#044244',
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30,
            }}>
            <Text
              style={{
                fontFamily: 'Bold',
                color: popularSelected ? '#9ca1a2' : '#044244',
              }}>
              RECENT
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Posts
            onPress={() => navigation.navigate('Detail')}
            name="Max Bator"
            profile={require('../images/p1.jpg')}
            photo={require('../images/5.jpg')}
          />

          <View
            style={{
              height: 160,
              backgroundColor: '#3c636c',
              width: 20,
              marginLeft: 20,
              marginTop: 120,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 160,
              backgroundColor: '#3c636c',
              width: 20,
              marginLeft: -40,
              marginRight: 20,
              marginTop: 120,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}></View>

          <Posts
            onPress={() => navigation.navigate('Detail')}
            name="Erka Berka"
            profile={require('../images/p2.jpg')}
            photo={require('../images/6.jpg')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Posts
            onPress={() => navigation.navigate('Detail')}
            name="Max Bator"
            profile={require('../images/p1.jpg')}
            photo={require('../images/3.jpg')}
          />

          <View
            style={{
              height: 160,
              backgroundColor: '#3c636c',
              width: 20,
              marginLeft: 20,
              marginTop: 120,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}></View>
        </View>
      </View>
    </ScrollView>
  );
};
=======
            alignItems: 'center',
            backgroundColor: '#FFF',
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#345c74"
            style={{
              fontFamily: 'Bold',
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12,
            }}
          />
          <Image
            source={require('../images/sear.png')}
            style={{height: 14, width: 14}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF2F2',
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#345c74',
                fontSize: 20,
                fontFamily: 'Bold',
                width: 250,
                paddingRight: 100,
              }}>
              Start learning new Staff
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('courses')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#f58084',
                alignItems: 'center',
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Bold',
                  fontSize: 12,
                }}>
                Categories
              </Text>
              <Image
                source={require('../images/a3.png')}
                style={{marginLeft: 20, width: 8, height: 8}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/undraw.png')}
            style={{marginLeft: -80, marginTop: 35}}
          />
        </View>
        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Bold',
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}>
          Courses in progress
        </Text>

        <CourseList
          img={require('../images/xd.png')}
          title="Adobe XD Prototyping"
          bg="#fdddf3"
        />
        <CourseList
          img={require('../images/sketch.png')}
          title="Sketch shortcuts and tricks"
          bg="#fef8e3"
        />
        <CourseList
          img={require('../images/ae.png')}
          title="UI Motion Design in After Effects"
          bg="#fcf2ff"
        />
      </ScrollView>
    </ImageBackground>
  );
}
>>>>>>> 1629659a8d549c9c7c03b6e975287b26f079e2bc
