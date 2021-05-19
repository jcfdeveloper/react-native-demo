import React, { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { OTHERS } from "../others/others.view";
import { Item } from "../../types/Item";
import { connect } from "react-redux";

interface Props {
  todos: Item[];
}

const HomeView: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <View>
      {props.todos.map((item: Item) => {
        return (
          <ListItem
            key={item.id}
            onPress={() => navigation.navigate(OTHERS, { id: item.id })}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state: any) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
