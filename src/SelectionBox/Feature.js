import React from "react";
import FeatureOption from "./FeatureOption";

class Feature extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.options.map((item, idx) => {
          const optionHash = this.props.feature + "-" + idx;
          return (
            <FeatureOption
              item={item}
              key={optionHash}
              id={optionHash}
              name={this.props.feature}
              stateFeatureName={this.props.stateFeature.name}
              handleFeatureSelection={this.props.handleFeatureSelection}
            />
          );
        })}
      </fieldset>
    );
  }
}

export default Feature;
