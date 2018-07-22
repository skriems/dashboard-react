import React from "react";

import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import axios from "axios";

import { AppContext, appState } from "./contexts/App";
import Dashboard from "./components/Dashboard";
import { Api } from "./utils/api";

/*
 * The App Component
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.fooFn = () => console.log('AppContext fooFn clicked');

    /* overwrite functions of the `<AppContext>` here
     * before attaching the `appState` to `this.state`
     */
    appState.fooFn = this.fooFn;
    this.state = appState;
  }

  componentDidMount() {
    this.state.debug && console.log("App componentDidMount");
    /*
     * Once the App Component is mounted, do a single request to the API to fetch initial data.
     *
     * To prevent the famous "Can't call setState on an unmounted component" warning we're using
     * the cancellation API from axios. This
     *  1) prevents calls to `setState` if an asynchronous fetch resolves after the component
     *     was already unmounted (saw this in tests, although it worked in prod with the previous
     *     approach of `setInterval` and `clearInterval`)
     *  2) is the correct way to solve this issue. see
     *     https://github.com/facebook/react/issues/2787#issuecomment-304485634
     */
    this.cancelSource = axios.CancelToken.source();
    let cancelToken = this.cancelSource.token;

    Api(cancelToken)
      .get()
      .then(response => {
        this.state.debug && console.log(response);
      })
      .catch(error => {
        this.state.debug && console.log('Error fetching Data');
      });
  }

  componentWillUnmount() {
    this.cancelSource.cancel();
  }

  componentWillReceiveProps(nextProps) {
    /* convenient func for noticing when `<App>` will do a full rerender */
    this.state.debug && console.log("App componentWillReceiveProps");
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Container fluid>
          <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            {/*
            <Route
              path="/namespaces/:namespaceName"
              exact={true}
              render={props => <Namespace {...props} {...this.state} />}
            />
            */}
          </Switch>
        </Container>
      </AppContext.Provider>
    );
  }
}
