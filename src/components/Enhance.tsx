import React from "react";

const Enhance = (Component: any) => (
  class extends React.Component<any, any> {
    render() {
      const {...rest} = this.props;
      return <Component {...rest} />;
    }
  }
);

export default Enhance;