import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Header from "./components/header/Header";
import MovieList from "./pages/movieList";
import MovieDetail from "./pages/movieDetail";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-container">
                    <ErrorBoundary>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <MovieList />
                            </Route>
                            <Route path="/:movie">
                                <MovieDetail />
                            </Route>
                            <Route path="*">
                                <NoMatch404 />
                            </Route>
                        </Switch>
                    </ErrorBoundary>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

function NoMatch404() {
    return <Redirect to={"/"} />;
}

export default App;
