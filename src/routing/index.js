import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Akun,
  Awal,
  HotelDetailScreen,
  Inbox,
  Introduction,
  Pesanan,
  Simpan,
  Splash,
  SplashProfile,
} from '../screens';
import {BottomNavigation} from '../components';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {colors} from '../constants';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <BottomTab.Screen
        name="Awal"
        component={Awal}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Simpan"
        component={Simpan}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};
export const Routes = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar backgroundColor={colors.blue2} />
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={({route}) => ({
              headerTitle: props => <HeaderTitle route={route} />,
              headerStyle: {
                backgroundColor: colors.blue2,
              },
              headerTintColor: colors.white,
            })}>
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SplashProfile"
              component={SplashProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Introduction"
              component={Introduction}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HotelDetail"
              component={HotelDetailScreen}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

function HeaderTitle({route}) {
  const data = getHeaderTitle(route);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <View style={{width: '55%'}}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: colors.white}}>
          {data.name}
          <Text
            style={{fontSize: 12, fontWeight: 'normal', color: colors.white}}>
            {'\n'}
            {data.location}
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/icon/traveloka-icon.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Image
          source={require('../assets/icon/traveloka-icon.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
    </View>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.name;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'HotelDetail':
      const {name} = route.params?.item;
      const {location} = route.params?.item;
      return {name, location};
    default:
      return 'Home';
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
