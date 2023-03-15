import { Image, StyleSheet, Text, View } from "react-native";
import { PageTitle, PrimaryButton } from "../../components";
import { Colors } from "../../helpers";

const { primary900, primary500 } = Colors;

function GameOverScreen() {
  return (
    <View style={styles.gameOverScreenContainer}>
      <PageTitle title="GAME OVER" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>X</Text> rounds to
        guess the number <Text style={styles.highlightText}>Y</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: primary900,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: primary500,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
