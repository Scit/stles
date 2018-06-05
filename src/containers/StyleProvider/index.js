import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'context/ThemeContext';
import CommonStoreConnector from 'hocs/CommonStoreConnector';

class StyleProvider extends React.Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.node
    };

    getTheme() {
        const { styles = {} } = this.props.store;
        const { branding = {}, globals = {}, stylesheets = {} } = styles;

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

export default CommonStoreConnector(StyleProvider);