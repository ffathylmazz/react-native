//import ettiğimiz kısım
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';


//kendi komponentlerimizi yazdığımız kısım
const App = () => (
  <View style={{flex:1}}>
        <Header headerText={'Müzik Listesi'} />
        <Liste/>   
  </View>

  );



//kodlarımızı render ettiğimiz yer
AppRegistry.registerComponent('ornekproje',() => App);
