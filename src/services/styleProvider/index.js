import { pick, isObject, isUndefined } from 'underscore';
import styleGenerator from 'services/styleGenerator';

class StyleProvider {
    getCssClasses(theme, stylesConfig) {
        const classStyles = stylesConfig.classList.reduce((result, classItem) => {
            const styleList = this._getStyleListByKey(theme, classItem);
            const cssClass = styleGenerator.generateCssClass(styleList);
            result[classItem] = cssClass;
            return result;
        }, {});
        return classStyles;
    }

    inflateClassStyles(styleList, classList) {
        return styleList.map(styleObject => pick(styleObject, classList));
    }

    inflateStylesheets(stylesheets, stylesheetList, defaultClassName) {
        return stylesheetList.map(stylesheetName => ({
            [defaultClassName]: stylesheets[stylesheetName] || {}
        }));

    }

    inflateSimple(styles, defaultClassName) {
        const initialResult = {
            [defaultClassName]: {}
        };

        return Object.keys(styles).reduce((result, styleKey) => {
            const styleValue = styles[styleKey];
            if (!this._isComponentStyle(styles, styleKey)) {
                result[defaultClassName][styleKey] = styleValue;
            } else {
                result[styleKey] = styleValue;
            }

            return result;
        }, initialResult);
    }

    groupStyles(...stylesList) {
        return stylesList.reduce((result, styleListItem) => {
            Object.keys(styleListItem).map(styleGroup => {
                if (isUndefined(result[styleGroup])){
                    result[styleGroup] = [];
                }

                result[styleGroup].push(styleListItem[styleGroup]);
                return null;
            });

            return result;
        }, {});
    };

    _getStyleListByKey(theme, key) {
        return theme.styles.map(style => style[key]);
    }

    _isComponentStyle(styles, key) {
        return isObject(styles[key]) && !key.startsWith('&');
    }
}

export default new StyleProvider();