import React from "react";
import USCurrencyFormat from '../formatUSCurrency'

class SummaryOption extends React.Component {
  render() {
    return (
      <div key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature}</div>
        <div className="summary__option__value">
          {this.props.selectedOption.name}
        </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default SummaryOption;
