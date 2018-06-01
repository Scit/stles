import React from 'react';
import PropTypes from 'prop-types';
import styleProvider from 'services/styleProvider';

export default function(Component, stylesConfig) {
    return class Styler extends React.Component {
        static propTypes = {
            theme: PropTypes.object
        };

        getCssClasses(theme) {
            const cssClasses = styleProvider.getCssClasses(theme, stylesConfig);
            return cssClasses;
        }

        render() {
            const { props } = this;
            const cssClasses = this.getCssClasses(props.theme);

            return (
                <Component
                    {...props}
                    theme={cssClasses}
                />
            );
        };
    }
}