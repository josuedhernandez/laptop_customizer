import React from "react";
import Feature from "./Feature";

class SelectionForm extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature;
          return (
            <Feature
              className="feature"
              key={featureHash}
              feature={feature}
              stateFeature={this.props.selected[feature]}
              options={this.props.features[feature]}
              handleFeatureSelection={this.props.handleFeatureSelection}
            />
          );
        })}
      </form>
    );
  }
}

export default SelectionForm;
