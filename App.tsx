import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import { Colors } from "./helpers";
import GameOverScreen from "./screens/GameOverScreen";

const { primary700, secondary500 } = Colors;

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  // useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // })

  const startGamerHandler = (pickednumber: typeof userNumber) => {
    setUserNumber(pickednumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={startGamerHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen pickedNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && !!userNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={[primary700, secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
