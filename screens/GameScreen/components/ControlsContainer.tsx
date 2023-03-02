import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../../../components";

interface ControlsContainerProps {
  onNextGuess: (direction: "greater" | "lower") => void;
}

function ControlsContainer({ onNextGuess }: ControlsContainerProps) {
  const onNextGuessHandler = (direction: "greater" | "lower") => {
    onNextGuess(direction);
  };

  return (
    <View>
      <Text>Higher or lower?</Text>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => onNextGuessHandler("greater")}>+</PrimaryButton>
        <PrimaryButton onPress={() => onNextGuessHandler("lower")}>-</PrimaryButton>
      </View>
    </View>
  );
}

export default ControlsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
})
