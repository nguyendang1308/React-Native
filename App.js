import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";

//Other components
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isEnableModal,setModal] = useState(false);
  const [listGoalText, setListGoalText] = useState([]);

  function toggleModel() {
    setModal(!isEnableModal);
  }

  function addGoalToList(goalText) {
    setListGoalText((valueToAdd) => [
      ...valueToAdd,
      { text: goalText, key: Math.random().toString() },
    ]);
    setModal(false)
  }

  function onRemoveItem(id) {
    setListGoalText((currentGoal) => {
      return listGoalText.filter((value) => value.key !== id);
    })
  }

  return (
    <View id="general" style={styles.general}>
      <Button title="Add new goal" color="#5e0acc" onPress={toggleModel}></Button>
      <GoalInput onAddGoal={addGoalToList} isEnable={isEnableModal} onCloseModal={toggleModel} listPreviewText={listGoalText}></GoalInput>
      <View id="divider" style={styles.divider}></View>
      <View id="list_text_input" style={styles.listText}>
        <FlatList
          data={listGoalText}
          renderItem={(value) => {
            return <GoalItem text={value.item.text} id={value.item.key} onTapItem={onRemoveItem}></GoalItem>;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "black",
  },
  listText: {
    flex: 8,
    marginVertical: 8,
  }
});
