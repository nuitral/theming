module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss"
    ],
    plugins: ["stylelint-scss"],
    rules: {
        "scss/at-rule-no-unknown": true,
        "scss/no-global-function-names": true,
        "scss/at-if-no-null": null,
        "declaration-empty-line-before": null,
    },
};
