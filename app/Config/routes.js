var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route= ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Calendar = require('../Views/Calendar');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Calendar}>
        </Route>
    </Router>
);

module.exports = Routes;
