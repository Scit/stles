export default class StyleProviderService {
    getComponentClasses(props) {
        const classes = styleAdapter.getComponentClasses({
            stylesheets: stylesConfig.stylesheets(props),
            classes: stylesConfig.classes
        });
    }
}