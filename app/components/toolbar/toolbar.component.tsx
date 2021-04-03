import React from "react"
import { Header } from 'react-native-elements';

type Props = {
  organization: string | undefined;
}

export default class ToolbarComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Header
        centerComponent={{ text: this.props.organization, style: { color: '#fff' } }}
      />
    );
  }
}