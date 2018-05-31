import React from 'react';
import PropTypes from 'prop-types';

export default function(Component, stylesConfig) {
    return class Styler extends React.Component {
        static propTypes = {
            theme: PropTypes.object
        };

        getCssClasses(theme) {
            // TODO: add reselect
            // TODO: implement
            return {
                container: 'class__container',
                content: 'class__content',
                text: 'class__text'
            }
        }

        render() {
            const { props } = this;
            const cssClasses = this.getCssClasses(props.theme);

            return (
                <Component
                    {...props}
                    cssClasses={cssClasses}
                />
            );
        };
    }
}