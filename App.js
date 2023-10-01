import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Stack, Button, TouchableOpacity, TextInput, ImageBackground } from 'react-native';


export default function App() {
  var [item1, setCount1] = useState(0);
  var [item2, setCount2] = useState(0);
  var [item3, setCount3] = useState(0);
  var [item4, setCount4] = useState(0);
  var [total, setCountTotal] = useState(0)

  return (
    <View style={styles.main}>
      <View style={styles.container}>

        <ImageBackground style={styles.backgroundImage} source={require('./assets/coffee/capocino.jpg')}>
          <View style={styles.cards}>
            <View style={styles.cardContext}>
              <Text style={styles.itemTitle}>Cappucino</Text>
              <View style={styles.cardPriceContext}>
                <Text style={styles.cardPriceText}>Price</Text>
                <Text style={styles.cardPriceText}>Php 149.00</Text>
              </View>
            </View>
            <View style={styles.cardCounterContext}>
              <TouchableOpacity onPress={() => {
                setCount1(item1 > 0 ? item1 - 1 : item1 - 0);
              }} style={styles.cardCounterButton}>
                <Text style={styles.cardCounterButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.cardCounterText}>{item1}</Text>
              <TouchableOpacity onPress={() => {
                setCount1(item1 + 1);
              }} style={styles.cardCounterButton}>
                <Text style={styles.cardCounterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>


        <ImageBackground style={styles.backgroundImage} source={require('./assets/coffee/capocino.jpg')}>
          <View style={styles.cards}>
            <View style={styles.cardContext}>
              <Text style={styles.itemTitle}>Caffè mocha</Text>
              <View style={styles.cardPriceContext}>
                <Text style={styles.cardPriceText}>Price</Text>
                <Text style={styles.cardPriceText}>Php 99.00</Text>
              </View>
            </View>
            <View style={styles.cardCounterContext}>
              <TouchableOpacity onPress={() => {
                setCount2(item2 > 0 ? item2 - 1 : item2 - 0);
              }} style={styles.cardCounterButton}>
                <Text style={styles.cardCounterButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.cardCounterText}>{item2}</Text>
              <TouchableOpacity onPress={() => {
                setCount2(item2 + 1);
              }} style={styles.cardCounterButton}>
                <Text style={styles.cardCounterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground>

                <ImageBackground style={styles.backgroundImage} source={require('./assets/coffee/capocino.jpg')}>
        <View style={styles.cards}>
          <View style={styles.cardContext}>
            <Text style={styles.itemTitle}>Espresso</Text>
            <View style={styles.cardPriceContext}>
              <Text style={styles.cardPriceText}>Price</Text>
              <Text style={styles.cardPriceText}>Php 99.00</Text>
            </View>
          </View>
          <View style={styles.cardCounterContext}>
            <TouchableOpacity onPress={() => {
              setCount3(item3 > 0 ? item3 - 1 : item3 - 0);
            }} style={styles.cardCounterButton}>
              <Text style={styles.cardCounterButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.cardCounterText}>{item3}</Text>
            <TouchableOpacity onPress={() => {
              setCount3(item3 + 1);
            }} style={styles.cardCounterButton}>
              <Text style={styles.cardCounterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>

                <ImageBackground style={styles.backgroundImage} source={require('./assets/coffee/capocino.jpg')}>
        <View style={styles.cards}>
          <View style={styles.cardContext}>
            <Text style={styles.itemTitle}>Regular Coffee</Text>
            <View style={styles.cardPriceContext}>
              <Text style={styles.cardPriceText}>Price</Text>
              <Text style={styles.cardPriceText}>Php 49.00</Text>
            </View>
          </View>
          <View style={styles.cardCounterContext}>
            <TouchableOpacity onPress={() => {
              setCount4(item4 > 0 ? item4 - 1 : item4 - 0);
            }} style={styles.cardCounterButton}>
              <Text style={styles.cardCounterButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.cardCounterText}>{item4}</Text>
            <TouchableOpacity onPress={() => {
              setCount4(item4 + 1);
            }} style={styles.cardCounterButton}>
              <Text style={styles.cardCounterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>

        <View style={styles.totalContext}>
          <TouchableOpacity onPress={() => {
            setCountTotal(total = (item1 * 149) + (item2 * 99) + (item3 * 99) + (item4 * 49))

          }} style={styles.totalButton}>
            <Text style={styles.totalButtonText}>Total</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.totalViewContext}>
        <Text style={styles.totalViewText}>Total:</Text>
        <Text style={styles.totalViewText}>Php {total}.00</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#4B1F0E',
    flex: 1,

  },
  container: {
    // backgroundColor: '#4B1F0E',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    paddingTop: 30,
  },

  cards: {
    width: 165,
    height: 165,
    // margin: 5,
    color: '#fff',
    borderRadius: 10,
    justifyContent: 'flex-end',
    // backgroundColor: '#79402B',

  },

  backgroundImage: {
    borderRadius: 10,
    margin: 5,
    width: 165,
    height: 165,
  },

  cardContext: {
    padding: '5%',
  },

  itemTitle: {
    color: 'white',
    fontSize: 20
  },

  cardPriceContext: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardPriceText: {
    color: 'white'
  },

  cardCounterContext: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  cardCounterButton: {
    width: 40,
    height: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardCounterButtonText: {
    color: 'white',
    fontSize: 25,
    width: '25%',
  },

  cardCounterText: {
    backgroundColor: 'black',
    color: '#fff',
    width: '51.5%',
    fontSize: 25,
    alignContent: 'center',
    textAlign: 'center'
  },

  totalContext: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },

  totalButton: {
    backgroundColor: '#79402B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },

  totalButtonText: {
    color: 'white',
    fontSize: 20,
  },

  totalViewContext: {
    height: '10%',
    width: '100%',
    backgroundColor: '#79402B',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10
  },

  totalViewText: {
    color: 'white',
    fontSize: 20
  }

});
