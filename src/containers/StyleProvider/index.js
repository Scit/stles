import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'context/ThemeContext';

export default class StyleProvider extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}