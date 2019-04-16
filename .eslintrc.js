module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "env": {
      "browser": true,
      "node": true,
      "es6": true,
  },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "rules": {
      "strict": 2,
      "import/no-extraneous-dependencies": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "max-len": [1, 70, 2, {ignoreComments: true}],
      "react/prop-types": 0,
      "import/no-unresolved": 0,
      "semi": 2,
      "react/forbid-prop-types": 0
  },
  "globals":{
      "document": true,
      "localStorage": true,
      "window": true
  }
};