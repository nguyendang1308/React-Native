import { StyleSheet, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOver from "./screens/GameOver";

export default function App() {
  const [useNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler}></StartGame>;

  if (useNumber) {
    screen = (
      <GameScreen
        userNumber={useNumber}
        onGameOver={gameOverHandler}
      ></GameScreen>
    );
  }

  if (gameIsOver && useNumber) {
    screen = <GameOver></GameOver>;
  }

  return (
    <LinearGradient
      colors={[Colors.yellow500, Colors.primary500]}
      style={styles.rootScreen}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
