import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import { PrimaryButton } from "../../components";
import { Colors } from "../../helpers";

const { primary900, secondary500 } = Colors;

interface StartGameScreenProps {
  onPickNumber: (chosenNumber: number) => void;
}
function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: primary900,
    borderRadius: 8,
    elevation: 8, // box-shadow CSS equivalent on Android

    // iOS shadow properties
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 45,
    fontSize: 32,
    borderBottomColor: secondary500,
    borderBottomWidth: 2,
    color: secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
