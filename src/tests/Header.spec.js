import React from "react";
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { MemoryRouter } from "react-router-dom";
import { AppContext, appState } from "../contexts/App";

import Header from "../components/header/Header";

/*
 * `<Header>`
 */
describe("<Header/>", () => {
  let div, testState;

  beforeEach(() => {
    testState = Object.assign({}, appState);
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={testState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    , div);
  })

  it("collapses when clicked on toggler", () => {
    let utils = render(
      <MemoryRouter>
        <AppContext.Provider value={testState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    , div);

    let collapse = utils.getByTestId('collapse');
    expect(collapse.classList).toContain('collapse');

    let toggler = utils.getByTestId('toggler');
    fireEvent.click(toggler);

    collapse = utils.getByTestId('collapse')
    expect(collapse.classList).toContain('collapsing')
  })
});
