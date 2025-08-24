import { Link } from 'expo-router';
import { Text, View } from 'react-native';



export default function HomeScreen() {
  return (
   <View className='flex-1 items-center justify-center '>
    <Text className='text-green-500'>Hello Amar</Text>
    <Link href={"/sign-in"}>Sign In</Link>
    <Link href={"/explore"}>Explore</Link>
    <Link href={"/profile"}>Profile</Link>
    <Link href={"/properties/1"}>Property</Link>

     
      <Text className=" font-bold text-blue-500 font-rubik">
        Welcome to Nativewind!
      </Text>
    
   </View>
  );
}


