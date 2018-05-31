import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'context/ThemeContext';
import styleConfiguration from './styleConfiguration.json';

export default class StyleProvider extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor(props) {
        super(props);

        this.state = {
            styleConfiguration
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.styleConfiguration}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}