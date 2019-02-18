module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react", "babel",
  ],
  "globals": {
    "graphql": false,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "classes": true,
    },
  },
  "rules": {
    "semi": 2,
  },
}
