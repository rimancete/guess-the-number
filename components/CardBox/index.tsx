import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import { Colors } from "../../helpers";

const { primary900 } = Colors;

interface CardBoxProps extends ViewProps {
  children: ReactNode;
}

function CardBox({ children, style }: CardBoxProps) {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
}

export default CardBox;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    marginTop: 36,
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
});
