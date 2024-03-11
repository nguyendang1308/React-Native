import { StyleSheet, Text, Pressable } from "react-native";

export default GoalItem;

function GoalItem(props) {
  return <Pressable android_ripple={{color: "red"}} onPress={props.onTapItem.bind(this, props.id)}>
    <Text style={styles.itemData}>{props.text}</Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  itemData: {
    backgroundColor: "#C6FFDD",
    textAlign: "left",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
});
