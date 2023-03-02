import { Text, StyleSheet } from "react-native";
import { Colors } from "../../helpers";

const { light500 } = Colors;
interface PageTitleProps {
  title: string;
}
function PageTitle({ title }: PageTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

export default PageTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: light500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: light500,
    borderRadius: 6,
    padding: 12,
  },
});
