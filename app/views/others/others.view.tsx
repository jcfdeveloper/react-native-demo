import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const OTHERS = 'others';

type RootStackParamList = {
  Others: {
    id: string;
  };
}

interface Props {
  route: RouteProp<RootStackParamList, "Others">;
}

const OthersView: FunctionComponent<Props> = ({ route }) => {
  return (
    <>
      <Text>Others View - {route.params.id}</Text>
    </>
  );
};

export default OthersView;
