import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const MainScreen = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]}>
    <Text>Main Screen</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]}>
    <Text>Profile Screen</Text>
  </View>
);

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'main', title: 'Main'},
    {key: 'profile', title: 'Profile'},
  ]);

  const renderScene = SceneMap({
    main: MainScreen,
    profile: ProfileScreen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition="bottom" // 하단 탭 위치 설정
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
