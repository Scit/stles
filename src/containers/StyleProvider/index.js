import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'context/ThemeContext';
import StoreConnector from 'hocs/StoreConnector';

class StyleProvider extends React.Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.node
    };

    getTheme() {
        const { store } = this.props;
        const { branding = {}, globals = {}, stylesheets = {} } = store;

        return {
            styles: [
                globals,
                branding
            ],
            stylesheets
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={this.getTheme()}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default StoreConnector(StyleProvider);