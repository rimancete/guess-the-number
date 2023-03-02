import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { PageTitle } from "../../components";
import ControlsContainer from "./components/ControlsContainer";
import GuessContainer from "./components/GuessContainer";
import LogRoundsContainer from "./components/LogRoundsContainer";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

interface GameScreenProps {
  pickedNumber: number;
}

function GameScreen({ pickedNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    pickedNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Dont't lit!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.gameScreenContainer}>
      <PageTitle title="Opponent's Guess" />

      <GuessContainer currentGuess={currentGuess} />

      <ControlsContainer onNextGuess={nextGuessHandler} />

      <LogRoundsContainer />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
});
