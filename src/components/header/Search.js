import React from "react";
import { withRouter } from "react-router-dom";

import { Async } from "react-select";
import { SearchAPI } from "../../utils/api";
import { debounce } from "../../utils/tools";

const search = (query, callback) => {
  SearchAPI(query)
    .then(objects => {
      callback(null, { options: objects });
    })
    .catch(error => callback(error, null));
};

const debouncedSearch = debounce(search, 800);

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

    this.state = { 'name': 'foo', 'value': 'foo' };

    this.getOptions = this.getOptions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  getOptions(searchTerm, callback) {
    if (!searchTerm) {
      return callback(null, { options: [] });
    }
    debouncedSearch(searchTerm, callback);
  }

  onChange(obj) {
    this.setState(obj);
    console.log(this.state);
  }

  render() {
    return (
      <Async
        id="definition-search"
        className="navbar-nav form-control form-control-dark search-control"
        placeholder="Search..."
        labelKey="name"
        cache={false}
        loadOptions={ this.getOptions }
        onChange={ this.onChange }
      />
    );
  }
}

export const Search = withRouter(SearchComponent);
