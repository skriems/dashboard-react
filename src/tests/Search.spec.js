import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { AppContext, appState } from "../contexts/App";
import { CONFIG } from "../config";

import { Search } from "../components/header/Search";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_URL = CONFIG.api;
const mock = new MockAdapter(axios);
mock.onGet(`${API_URL}/search/`).reply(200, {'name': 'foo', 'value': 'bar'});

/*
 * `<Search>`
 */
describe("<Search/>", () => {
  let testState, history, onChange, getOptions;

  beforeEach(() => {
    history = { push: jest.fn() };
    testState = Object.assign({}, appState);
    testState.fooFn = jest.fn();
    onChange = jest.spyOn(Search.WrappedComponent.prototype, "onChange");
    getOptions = jest.spyOn(Search.WrappedComponent.prototype, "getOptions");
  });

  afterEach(() => {
    testState.fooFn.mockReset();
    history.push.mockReset();
    onChange.mockRestore();
    getOptions.mockRestore();
  });

  it("renders without crashing", () => {
    let div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <AppContext.Provider value={testState}>
          <Search />
        </AppContext.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
