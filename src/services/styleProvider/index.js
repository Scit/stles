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

    _getStyleListByKey(theme, key) {
        return theme.styles.map(style => style[key]);
    }

    _createClasses(styleList) {

    }
}

export default new StyleProvider();