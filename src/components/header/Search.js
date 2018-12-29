import React from "react";
import { withRouter } from "react-router-dom";
import AsyncSelect from "react-select/lib/Async";

import { SearchAPI } from "../../utils/api";
import { debounce } from "../../utils/tools";

const search = (query, callback) => {
  SearchAPI(query)
    .then(options => {
      callback( options );
    })
    .catch(error => callback(error));
};

const debouncedSearch = debounce(search, 800);

const customStyles = {
  control: styles => ({
    ...styles,
    width: '100%',
    backgroundColor: 'rgba(255, 255,255, .1)',
    borderRadius: '0px',
    border: '0px',
  }),
  option: (styles, {data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: '#343a40',
    };
  }
};


/*
 * Search Component
 *
 * asynchronously fetches search results from the API
 * to populate its `options`.
 *
 * utilizes an ES6 `debounce` fn and retrieves `<Route>`
 * information using `withRouter`
 *
 * checkout this awesome comment:
 * https://github.com/JedWatson/react-select/issues/614#issuecomment-380763225
 */
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'foo' };
    this.getOptions = this.getOptions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  getOptions(searchTerm, callback) {
    if (!searchTerm) {
      return callback({ options: [] });
    }
    debouncedSearch(searchTerm, callback);
  }

  onChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <AsyncSelect
        id="search"
        className="navbar-nav form-control form-control-dark search-control"
        placeholder="Search..."
        loadOptions={ this.getOptions }
        getOptionLabel={option => option.name}
        onInputChange={ this.onChange }
        styles = { customStyles }
      />
    );
  }
}

export const Search = withRouter(SearchComponent);
