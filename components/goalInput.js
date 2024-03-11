import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal,FlatList,Text } from "react-native";

export default GoalInput;

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputText(value) {
    setGoalText(value);
  }

  function addGoal() {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={props.isEnable} animationType="slide">
      <View id="input-text-field" style={styles.inputTextField}>
        <TextInput
          placeholder="Input here to add goal"
          style={styles.textField}
          onChangeText={goalInputText}
        ></TextInput>
        <Button title="Add goal" onPress={addGoal}></Button>
        <Button title="Close" onPress={props.onCloseModal}></Button>
      </View>
      <View id="divider" style={styles.divider}></View>
      <View id="list_text_input" style={styles.listText}>
        <FlatList
          data={props.listPreviewText}
          renderItem={(value) => {
            return <Text style={styles.itemData}>{value.item.text}</Text>;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>  
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputTextField: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 50,
    paddingHorizontal: 12,
    fontSize: 20,
  },
  textField: {
    padding: 12,
    marginRight: 12,
    borderColor: "black",
    borderWidth: 1,
    flex: 3,
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "black",
  },
  listText: {
    flex: 8,
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  itemData: {
    backgroundColor: "#C6FFDD",
    textAlign: "left",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
});
