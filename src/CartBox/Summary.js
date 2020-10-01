import React from "react";
import SummaryOption from "./SummaryOption";
import Total from "./Total";

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {Object.keys(this.props.selection).map((feature, idx) => {
          const featureHash = feature + "-" + idx;
          const selectedOption = this.props.selection[feature];

          return (
            <SummaryOption
              className="summary__option"
              key={featureHash}
              feature={feature}
              selectedOption={selectedOption}
            />
          );
        })}
        <Total
          total={Object.keys(this.props.selection).reduce(
            (acc, curr) => acc + this.props.selection[curr].cost,
            0
          )}
        />
      </section>
    );
  }
}

export default Summary;
