import React from "react";
import { CONFIG } from "../config";

/*
 * default global AppState
 */
export const appState = {
  debug: CONFIG.debug,
};

/*
 * `<AppContext>` component which itself provides the `<Provider>` and
 * `<Consumer>` component.
 *
 * Note that object passed to `React.createContext` has default values
 * which get populated/changed in `<App>` which acts as the `<Provider>`.
 *
 * Make sure the shape of the default value passed to
 * createContext matches the shape that the consumers expect!
 */
export const AppContext = React.createContext({
  appState,
  fooFn: () => {}
});
