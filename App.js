/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    console.log("Welcome to C308 Leson 04 quiz!")
    console.log("Your component here")
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>

              <Text style={styles.sectionTitle}>Set Pickup Time</Text>
              <Text style={styles.sectionDescription}>Set a time you would like us to arrive at your pickup location</Text>

              <Text style={styles.highlight}>RP Furniture Shop</Text>
            </View>
          </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Crowded Bowl</Text> serves DIY vegetarian salad bowls. Pasta, potato salad and olive fried rice are some of the options availaible.
              </Text>
              <Text style={styles.highlight}>W4/W6 Lawn Canteen</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Western Cuisine @ Koufu</Text> sells one of the most delicious western food at very affordable prices. Their top selling item would be chicken and spagethetti.
              </Text>
              <Text style={styles.highlight}>E1 Level 1, Koufu</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Ayam Penyet</Text> has a long queue for its 'smashed chicken'(ayam penyet). The chicken is soaked in homemade sauce and topped with crunchy fried crumbs. Its chilli is not too spicy.
              </Text>
              <Text style={styles.highlight}>W4/W6 Lawn Cantten</Text>
              <Text style={styles.sectionDescription}>

              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
