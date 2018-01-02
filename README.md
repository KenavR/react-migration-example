# Migration of a small project to React

## Structure
There are basically three section in this example
- core
include the core (mostly) stateless components, that can be used in multiple places or are part of the basic page structure

- services
Singleton classes which are unrelated to React itself. In this example they include all the calculation logic

- pages
the pages of example. Each directory represent one page. The entry point to a page is the Container component, which is stateful and is responsible for collecting the required data and managing the events of it children. This allows the child components to be stateless in the context of the app (they may have internal state which is unrelated to anything else in the app) 

## CSS
The project uses the default CSS implementation used by create-react-app, I personally prefer CSS-in-JS solutions like [styled-components](https://www.styled-components.com/) but I kept it out of the example and more or less ignored CSS entirely.

## Technology
This example doesn't use any library from the React ecosystem, just React itself. (That's why there is a very simple router implementation)

## Run
The project uses create-react-app, to execute it navigate into the "react-version" directory and run "yarn start"
