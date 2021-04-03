import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { State } from '../../redux/reducers/todo.reducer';
import { ListItem } from 'react-native-elements'
import { CheckBox } from 'react-native-elements'

class HomeView extends React.Component<State> {
  constructor(props: State) {
    super(props);
  }
  render() {
    return (
      <View>
        {
          this.props.todos.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.title}</ListItem.Title>
                <ListItem.Subtitle>{l.notes}</ListItem.Subtitle>
              </ListItem.Content>
              <CheckBox checked={l.done} />
            </ListItem>
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({ todos: state.todos_store.todos });
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);