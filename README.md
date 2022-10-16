# INSTALLATION

1. Do a `git clone`
2. Run `expo install`
3. Run `yarn run server`
4. Run `expo start`

# How the solution could be improved, if you had more time, or if this had been a production application.

- usage of typescript
- extensive setup of Plop for easy component generation

# How you would implement the “Click to add member” feature

- I would use the `react-native-bottom-modal` to create a bottom sheet modal that would contain the necessary form details if the form fields are few,
- but if the form feilds are much then i would create a new screen for it.
- I would write tests for the form fields
- then write the validations, using custom validation or Yup to write the validation schema
- then create use the `useMutation` from `@apollo/client` to submit it to the backend

# Anything else you would like to tell us about.

- Figma designs needs to be consistent especially in margin, paddings etc.
- Improved Graphql implementation with more test coverage
- improve the test coverage
- Improve the CI/CD to cover more test coverage, thereby preventing PR creation without better test coverage
- Upgrade to typescript
- Use react-native-cli instead of expo, based on the fact that expo is limited in features like SVG conversion which is alot easier with react-native-cli, and also lesser sizes, and better testing libraries like enzyme would work better
- Add more setup information for new collaborators, so as to allow then onboard faster
- Relative imports can be shorter by using the `babel-plugin-module-resolver`
- Graphql server to https for better security
