import React, { Component } from 'react';import { Route } from 'react-router';class PrivateRoutes extends Component {    render () {        return <Route path={ this.props.path } component={ this.props.component } sensitive={ true }/>;    }}export default PrivateRoutes;