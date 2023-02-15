import { Text, TextProps, View } from "react-native";

function PrimaryButton({children}: TextProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
