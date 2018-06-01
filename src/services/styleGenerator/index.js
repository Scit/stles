import { cx, css } from 'emotion';

class StyleGenerator {
    generateCssClass(styleList) {
        return cx(styleList.map(style => css(style)));
    }
}

export default new StyleGenerator();