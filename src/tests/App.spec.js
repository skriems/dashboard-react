import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import App from "../App";
import { CONFIG } from "../config";

const API_URL = CONFIG.api;

/* the initial global App.state
 * has the namespaces payload from Datum and empty arrays
 * TODO:
 *  - create a func for categorization in `App.js`
 *  - use that also here to create the `initState` from the `namespaces` fake data
 */

/** set the MockAdapter on the global axios instance */
const mock = new MockAdapter(axios);
mock.onGet(`${API_URL}`).reply(200, { foo: "data" });

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
