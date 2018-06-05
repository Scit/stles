import React from 'react';
import PropTypes from 'prop-types';
import { mapObject } from 'underscore';
import styleProvider from 'services/styleProvider';
import styleGenerator from 'services/styleGenerator';

export default function(Component, stylesConfig) {
    return class Styler extends React.Component {
        static propTypes = {
            theme: PropTypes.object
        };

        getCssClasses(theme) {
            const { classList } = stylesConfig;
            const defaultClassName = classList[0];
            const { stylesheets: stylesheetList } = this.props.properties;

            const externalStylesList = styleProvider.inflateClassStyles(theme.styles, classList);
            const stylesheetStylesList = styleProvider.inflateStylesheets(theme.stylesheets, stylesheetList, defaultClassName);
            const propsStyles = styleProvider.inflateSimple(this.props.properties.cssStyle, defaultClassName);
            const ownStyles = styleProvider.inflateSimple(stylesConfig.theme, defaultClassName);

            const groupedStyles = styleProvider.groupStyles(
                ownStyles,
                ...externalStylesList,
                ...stylesheetStylesList,
                propsStyles
            );

            const cssClasses = mapObject(groupedStyles, (value) => styleGenerator.generateCssClass(value));
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