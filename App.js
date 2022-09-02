import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [data, setData] = useState("");

  const [listDatas, setListData] = useState([]);

  const goalInputHandler = (enterData) => {
    setData(enterData);
  };
  const addGoalHandler = () => {
    setListData((currentListData) => [...currentListData, { text: data }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputData}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listData}>
        <FlatList
          data={listDatas}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <View style={styles.textData} key={itemData.index}>
                <Text
                  style={styles.textGoal}
                >{`${itemData.index} - ${itemData.item.text}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
  },
  inputData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    width: "80%",
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 8,
    padding: 4,
  },

  listData: {
    marginTop: 20,
    borderBottomColor: "black",
    borderTopWidth: 1,
    flex: 5,
  },
  textData: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    margin: 8,
  },
  textGoal: {
    color: "white",
  },
});
