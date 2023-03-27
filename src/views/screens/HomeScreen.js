import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../components/Button';
const HomeScree = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Username: {userDetails?.fullname}
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Email ID: {userDetails?.email}
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Phone Number: {userDetails?.phone}
      </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScree;