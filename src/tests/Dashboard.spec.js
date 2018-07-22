import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { AppContext, appState } from "../contexts/App";

/*
 * Notice that we need the `<AppContext.Provider>` for the
 * `<Sidebar>` but still pass `props` to the Dashboard
 * (...routing information to `<Header>` etc)
 */
describe("<Dashboard/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(
      <MemoryRouter>
        <AppContext.Provider value={appState}>
          <Dashboard {...appState} />
        </AppContext.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
