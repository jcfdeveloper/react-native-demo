import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { BottomSheet } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { Link } from "@react-navigation/native";

interface Props {
  organization: string | undefined;
}

interface Item {
  title: string;
  icon: string;
  type: string;
  containerStyle?: any;
  titleStyle?: any;
  iconColor?: string;
  onPress?: any;
}

export default class ToolbarComponent extends React.Component<Props> {
  state = {
    isVisible: false,
  };

  list: Item[] = [
    {
      title: "Importar",
      icon: "share-outline",
      type: "ionicon",
      onPress: () => this.import(),
    },
    {
      title: "Exportar",
      icon: "download-outline",
      type: "ionicon",
    },
    {
      title: "Limpiar",
      type: "ionicon",
      icon: "trash-outline",
    },
    {
      title: "Cerrar",
      icon: "close-outline",
      iconColor: "red",
      type: "ionicon",
      containerStyle: { backgroundColor: "#fff" },
      titleStyle: { color: "red" },
      onPress: () => this.setState({ isVisible: false }),
    },
  ];

  constructor(props: Props) {
    super(props);
  }

  import = async () => {
    let file: any = await DocumentPicker.getDocumentAsync();
    if (!file) {
    }
    let read = await FileSystem.readAsStringAsync(file.uri);
    let lines = read.split("\n");

    lines.forEach((element) => {
      console.log(element);
    });
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: this.props.organization,
            style: { color: "#fff" },
          }}
          rightComponent={{
            icon: "more-vert",
            color: "#fff",
            onPress: () => this.setState({ isVisible: true }),
          }}
        />
        {/* <BottomSheet
          modalProps={{ transparent: true, animationType: "slide" }}
          isVisible={this.state.isVisible}
        >
          {this.list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <Icon type={l.type} name={l.icon} color={l.iconColor}></Icon>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
          <ListItem>
            <Icon type="ionicon" name="close-outline"></Icon>
            <ListItem.Content>
              <ListItem.Title>
                <Link to="/others/1">Others</Link>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </BottomSheet> */}
      </View>
    );
  }
}
