import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'context/ThemeContext';
import StoreConnector from 'hocs/StoreConnector';

class StyleProvider extends React.Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.node
    };

    render() {
        return (
            <ThemeContext.Provider value={this.props.store}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default StoreConnector(StyleProvider);