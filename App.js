import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/home';
import Play from './components/Game/guessNumber';
import MainHeader from './components/MainNavigation/MainHeader';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/ContactUs/contact';
import AuthForm from './components/Authentication/AuthForm';
// import About from './components/AboutUs';
import Footer from './components/Footer/footer';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// to load component dynamically OR lazy loading of component in React
const About = React.lazy(() => import('./components/AboutUs/AboutUs'));

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Suspense fallback={
          <div>
            Please Wait...
          </div>
        }>
          <Switch>
            <Route path="/" exact>
              <Redirect to="home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
           {/* Above one can also be written like: <Route path="/" element={<Home />} /> */}
            
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/login" exact>
              <AuthForm />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/play" exact>
              <Play />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <ScrollToTop />
      <Footer/>
    </div>
  );
}

export default App;
