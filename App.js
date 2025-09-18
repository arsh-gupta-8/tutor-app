import 'react-native-gesture-handler';

import * as React from 'react';
import { Text, TextInput, Image, View, StyleSheet, Button, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useRef, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { getUsers } from './getUsers.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();

const questions = [
  "What language do you prefer learning in?",
  "Would you like to study offline or online?",
  "What is your price range?",
  "What subject would you like to study?"
];

const SAT_Icon = require('./assets/SAT_Icon.png')
const GED_Icon = require('./assets/GED_Icon.png')
const IELTS_Icon = require('./assets/IELTS_Icon.png')

const styles = StyleSheet.create({
  handleSettingsTab: { fontSize: 16, color: "black" },
  handleSearchContainer: { padding: 10, paddingTop: 0, alignItems: "center" },
  handleInputContainer: {
    marginTop: "7%",
    width: "98%",
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: "#f1eeeeff",
  },
  handleTopicSelection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  handleTopicIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  handleTutorIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    backgroundColor: "#fff",
    borderRadius: (screenWidth * 0.25)/2,
    overflow: "hidden",
  },
  handleTopicImage: { width: "100%", height: "100%", resizeMode: "cover" },
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  questionBox: {
    position: "absolute",
    left: 30,
    right: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 4,
    alignItems: "left",
  },
  answeredBox: {
    position: "absolute",
    left: 30,
    right: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e6f0ff",
    elevation: 2,
  },
  option: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  topicSelectionTitles: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "left",
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
  }
});

const usersList = [];

async function makeUserList() {
  const data = await getUsers();
  usersList.length = 0;
  usersList.push(...data);
}

function Home() {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>

      <View>
        <Text style={{fontSize: 35, padding: 20, paddingBottom: 10, fontWeight: "700"}}>Hi, Hok!</Text>
        <Text style={{fontSize: 26, paddingLeft: 20, paddingBottom: 5, fontWeight: "500"}}>Ready to ace your exams?</Text>
      </View>

      <View style={styles.handleSearchContainer}>
        <TextInput
          style={styles.handleInputContainer}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <Text style={styles.topicSelectionTitles}>University Exams</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={styles.handleTopicSelection}>
          <TouchableOpacity style={styles.handleTopicIcon}>
            <Image
              source={ SAT_Icon }
              style={styles.handleTopicImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.handleTopicIcon}>
            <Image
              // Previous -- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIMjXS-m9gAHD-oD_d2vWUSAgAm_4wVULGw&s
              source={ GED_Icon }
              style={styles.handleTopicImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.handleTopicIcon}>
            <Image
            // Previous -- https://vtlogo.com/wp-content/uploads/2020/06/international-english-language-testing-system-ielts-vector-logo-small.png
              source={ IELTS_Icon }
              style={styles.handleTopicImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.handleTopicIcon}>
            <Image
              source={{ uri: "https://edubooks.uk/cdn/shop/collections/A-LEVEL_-_BOOKS_FOR_THE_FUTURE.png?v=1725110872"}}
              style={styles.handleTopicImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Text style={[styles.topicSelectionTitles, {paddingTop: 30}]}>Recommended Tutors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={styles.handleTopicSelection}>
          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.handleTutorIcon}>
              <Image
                source={{ uri: "https://variety.com/wp-content/uploads/2024/01/Dwayne-Johnson_credHuyDoan-e1705977711715.jpg?w=1000&h=667&crop=1"}}
                style={styles.handleTopicImage}
              />
              
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight:"500", paddingTop:7}}>Mr Rock</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.handleTutorIcon}>
              <Image
                source={{ uri: "https://media.istockphoto.com/id/1365527907/photo/portrait-of-smiling-mature-teacher-with-laptop-in-the-classroom.jpg?s=612x612&w=0&k=20&c=9Zgf2IEHkNV7LTEcmFLgOTqY8jaX0K5P-8IYmsyafA4="}}
                style={styles.handleTopicImage}
              />
              
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight:"500", paddingTop:7}}>Ms Teach</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.handleTutorIcon}>
              <Image
                source={{ uri: "https://media.istockphoto.com/id/1391004406/photo/portrait-of-a-successful-asian-teacher-a-man-in-a-shirt-looking-at-the-camera-and-smiling-in.jpg?s=612x612&w=0&k=20&c=C3VNV594qFe0o-9S3IsuwIfx3lCcxyiEL74SJhFqPUE="}}
                style={styles.handleTopicImage}
              />
              
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight:"500", paddingTop:7}}>Mr Aura</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.handleTutorIcon}>
              <Image
                source={{ uri: "https://media.istockphoto.com/id/1364388460/photo/cheerful-black-teacher-standing-outside-education-building.jpg?s=612x612&w=0&k=20&c=ajTi6bqC9LD-2DVfCt8j7bJYuCsJowYFDE8qVnB9chM="}}
                style={styles.handleTopicImage}
              />
              
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight:"500", paddingTop:7}}>Mrs 67</Text>
          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}


function TutorFilters() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState([]);

  const position = useRef(new Animated.Value(screenHeight)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const animateIn = () => {
    Animated.timing(position, {
      toValue: screenHeight / 3,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const handleAnswer = (answer) => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: 50 + answered.length * 60,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setAnswered([...answered, { q: questions[currentIndex], a: answer }]);
      setCurrentIndex(currentIndex + 1);
      position.setValue(screenHeight);
      scale.setValue(1);
      animateIn();
    });
  };

  React.useEffect(() => {
    animateIn();
  }, []);

  return (
    <View style={styles.container}>
      {answered.map((item, i) => (
        <View key={i} style={[styles.answeredBox, { top: 50 + i * 60 }]}>
          <Text style={{ fontSize: 14 }}>{item.q}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{item.a}</Text>
        </View>
      ))}

      {currentIndex < questions.length && (
        <Animated.View
          style={[
            styles.questionBox,
            { transform: [{ translateY: position }, { scale: scale }] },
          ]}
        >
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            {questions[currentIndex]}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => handleAnswer("Option A")} style={styles.option}>
              <Text>A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAnswer("Option B")} style={styles.option}>
              <Text>B</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
}


const TutorStack = createNativeStackNavigator();

function TutorStackScreen() {
  return (
    <TutorStack.Navigator screenOptions={{ headerShown: false }}>
      <TutorStack.Screen name="Tutor" component={Tutor} />
      <TutorStack.Screen name="TutorFilters" component={TutorFilters} />
    </TutorStack.Navigator>
  );
}


function Tutor({ navigation }) {
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    makeUserList();
  }, []);

  return (
    <SafeAreaView style={{ flex:1, alignItems:'center' }}>
      <View style={styles.handleSearchContainer}>
        <TextInput
          style={[styles.handleInputContainer, {width: screenWidth/10*8.5}]}
          placeholder="Search for Tutors"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <TouchableOpacity
        style={[styles.handleTopicIcon, {height: "14%"}]}
        onPress={() => navigation.navigate("TutorFilters")}
      >
        <Text style={{fontSize: 30}}>Find a Tutor!</Text>
      </TouchableOpacity>

      {usersList.map(user => (
        <View key={user.UserID} style={{ marginTop: 10 }}>
          <Text>{user.Forename} {user.Surname}</Text>
          <Text>{user.Email}</Text>
        </View>
      ))}

      {/* {usersList.map((user) => {
        const userID = user.UserID;
        const forename = user.Forename;
        const surname = user.Surname;
        const email = user.Email;
        const phoneNumber = user.Phone_Number;

        console.log(userID, forename, surname, email, phoneNumber);

        return (
          <View key={userID} style={{ marginTop: 10 }}>
            <Text>{forename} {surname}</Text>
            <Text>{email}</Text>
          </View>
        );
      })} */}

    </SafeAreaView>
  );
}


function University() {
  return (
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>University Screen</Text>
    </SafeAreaView>
  );
}


function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6495ED" }}>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
          Hello, Guest
        </Text>
        <View style={{ marginTop: 15, width: '80%', backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' }}>
          <Button
            title="Login / Register"
            color="#6495ED"
            accessibilityLabel="register to make an account or login"
          />
        </View>
      </View>

      <View style={{
        flex: 1,
        marginTop: 20,
        padding: 20,
        paddingTop: 35,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        gap: 40,
      }}>
        <Text style={styles.handleSettingsTab}>Register as Tutor</Text>
        <Text style={styles.handleSettingsTab}>Language</Text>
        <Text style={styles.handleSettingsTab}>Settings</Text>
        <Text style={styles.handleSettingsTab}>Account Setting</Text>
        <Text style={styles.handleSettingsTab}>Help Center</Text>
        <Text style={styles.handleSettingsTab}>Contact Support</Text>
        <Text style={styles.handleSettingsTab}>FAQ</Text>
        <Text style={styles.handleSettingsTab}>How to use mytutor Th?</Text>
      </View>
    </SafeAreaView>
  );
}


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          height: 100,
          bottom: -30,
          borderRadius: 20,
          outlineWidth: 2,
          outlineColor: "#6495ED",
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: { marginBottom: 0, fontSize: 12 },
        tabBarItemStyle: { marginVertical: 0 },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tutors" component={TutorStackScreen} />
      <Tab.Screen name="University" component={University} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainTabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
