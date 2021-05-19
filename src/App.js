import React, { Component, Suspense, lazy } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import Link from './components/_ui/Link/Link';
import Header from './components/Home/HomeHeader/HomeHeader';
import Loader from './components/_ui/Loader';

import './App.scss';

const Home = React.lazy(() => import('./components/Home/Home'));

class App extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.path != this.props.path) return;
  //   this.scrollToTop();
  // }

  // scrollToTop = () => {
  //   scrollTo(0, 0);
  // };

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hart Bullock</title>
          <link rel="canonical" href="https://hartbullock.com/" />
          <meta property="og:type" content="article" />
          <meta name="blog" content="Portfolio of Hart Bullock" />
        </Helmet>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route>
              <div
                style={{
                  height: '90vh',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h2>Uh oh, there's nothing here</h2>
                <Link href="/">Take me Home</Link>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
