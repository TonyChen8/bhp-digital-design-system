import React from 'react';
import Autosuggest from 'react-autosuggest';

class SimpleAutosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchedSuggestions: []
    };

    [
      'onSuggestionsClearRequested',
      'onSuggestionsFetchRequested',
      'renderSuggestion',
      'getSuggestionValue'
    ].forEach(name => {
      this[name] = this[name].bind(this);
    });
  }

  onSuggestionsFetchRequested({ value }) {
    const suggestions = this.props.suggestions || [];
    value = value.toLowerCase();
    const matchedSuggestions = suggestions.filter(suggestion => {
      return suggestion.toLowerCase().search(value) != -1;
    });
    this.setState({ matchedSuggestions });
  }

  onSuggestionsClearRequested() {
    this.setState({ matchedSuggestions: [] });
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion}</div>;
  }

  getSuggestionValue(suggestion) {
    return suggestion;
  }

  render() {
    const {
      value,
      onChange,
      inputProps,
      suggestions,
      placeholder,
      ...otherProps
    } = this.props;
    const { matchedSuggestions } = this.state;

    return (
      <Autosuggest
        suggestions={matchedSuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestion={this.renderSuggestion}
        getSuggestionValue={this.getSuggestionValue}
        inputProps={Object.assign({}, inputProps, {
          className: 'form-control',
          placeholder,
          value,
          onChange,
        })}
        {...otherProps}
      />
    );
  }
}

export {
  Autosuggest,
  SimpleAutosuggest
};
