import { Alert, StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'



import Views from './Basics/Views';
import Images from './Basics/Images';
import TextInput from './Basics/Textinput'
import Buttons from './Basics/Button';
import Imagebackgrounds from './Basics/Imagebackgrounds'
import Lists from './Basics/Lists'
import Modals from './Basics/Modal'
import Alerts from './Basics/Alert';
import RefreshControls from './Basics/RefreshControl'
import Switches from './Basics/Switches'

export default function App() {
  return (
    <SafeAreaProvider style={{flex : 1}}>
      <View style={styles.container}>
        <Switches />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
