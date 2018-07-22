import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";
import { AppContext, appState } from "../contexts/App";

import Header from "../components/header/Header";

/*
 * `<Header>`
 */
describe("<Header/>", () => {
  it("renders without crashing", () => {
    let testState = Object.assign({}, appState);
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(
      <MemoryRouter>
        <AppContext.Provider value={testState}>
          <Header {...testState} />
        </AppContext.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("toggleNav changes the state", () => {
    let testState = Object.assign({}, appState);
    const wrapper = shallow(<Header {...testState} />);
    expect(wrapper.instance().state.navIsOpen).toEqual(false);
    wrapper.instance().toggleNav();
    expect(wrapper.instance().state.navIsOpen).toEqual(true);
  });
});
