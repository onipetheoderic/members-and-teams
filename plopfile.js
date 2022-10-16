module.exports = plop => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/__tests__/components.test.js",
        templateFile: "templates/component.test.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.js",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "src/components/index.js",
        template:
          'export { default as {{ pascalCase name }} } from "./{{ pascalCase name }}";',
      },
    ],
  });

  plop.setGenerator("screen", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the screen?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/{{ pascalCase name }}.js",
        templateFile: "templates/screen.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/index.js",
        template:
          'export { default as {{ pascalCase name }} } from "./{{ pascalCase name }}";',
      },
      {
        type: "add",
        path: "src/__tests__/screens/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "templates/screen.test.hbs",
      },
      {
        type: "append",
        path: "src/screens/index.js",
        template:
          'export { {{ pascalCase name }} } from "./{{ pascalCase name }}";',
      },
      {
        type: "append",
        path: "App.js",
        pattern: /(\/\/ SCREENS IMPORTS)/g,
        template: 'import { {{ pascalCase name }} } from "./src/screens";',
      },
      {
        type: "modify",
        path: "App.js",
        pattern: "{/*  */}",
        template:
          '<Stack.Screen name="{{pascalCase name}}" component={ {{pascalCase name}} } /> \n {/*  */}',
      },
    ],
  });
};
