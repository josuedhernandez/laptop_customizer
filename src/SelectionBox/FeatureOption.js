import React from "react";
// import slugify from 'slugify';
import USCurrencyFormat from '../formatUSCurrency'

class FeatureOption extends React.Component {
  selectionItem = (value) => {
    console.log(`Something ${value}`);
    // const selected = Object.assign({}, this.state.selected);
    // selected[feature] = newValue;
    // this.setState({
    //   selected,
    // });
  };
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.id}
          key={this.props.id}
          className="feature__option"
          // name={slugify(this.props.feature)} // Check if slugify is needed
          // name={this.props.feature}
          // checked={this.props.item.name === this.props.stateFeatureName}
          // onChange={(e) =>
          //   this.props.handleFeatureSelection(this.props.name, this.props.item)
          // }
          // checked={item.name === this.state.selected[feature].name}
          onChange={e => this.selectionItem(e.target.value)}
        />
        <label htmlFor={this.props.item.itemHash} className="feature__label">
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureOption;
