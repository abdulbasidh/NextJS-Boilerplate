const nextTranslate = require('next-translate');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { i18n } = require('./next-i18next.config');

module.exports = nextTranslate({
    i18n,
    plugins: [new BundleAnalyzerPlugin()]
});
