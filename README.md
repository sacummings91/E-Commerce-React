# Q2 Project: "CRUD" Application with React and Airtable

## Approval Process

- You must get your project approved by the lead instructor
- You must submit an initial draft specification (i.e., a 1-pager) describing your project by Friday, September 8, 2017
- You must submit a final draft specification describing your project by Friday, September 15, 2017
  - You should include a description of every page in your app
  - You should include a description of every feature in your app (particular those that map to CRUD operations)
  - You should include a description of your Airtable table(s) (i.e., list the columns and the type of data that will be included in each column)
- The following is optional, but HIGHLY recommended -- You should Create wireframes for every UI component/page you plan to include in your app
  - You should annotate your wireframes to refer back to the written feature descriptions in your specification

## Technical Requirements

You must build a CRUD application using...
- [`create-react-app`](https://github.com/facebookincubator/create-react-app) for scaffolding your React project
- React for rendering your HTML UI
- CSS for styling your UI
  - You may use a CSS framework (e.g., [Materialize CSS](http://materializecss.com/), [Bootstrap](http://getbootstrap.com/), [Semantic UI](https://semantic-ui.com/), [Zurb Foundation](http://foundation.zurb.com/sites.html), etc.)
  - You may use a React UI Kit framework (e.g., [Material UI](http://www.material-ui.com/), [React Bootstrap](https://react-bootstrap.github.io/), [React Semantic UI](https://react.semantic-ui.com/introduction), etc.). If you choose this option, make sure to account for the learning curve.
  - You may also write your own custom CSS or React UI Kit. That said, keep in mind that you only have one week, so make sure to account for how long this might take.
- [Storybook](https://storybook.js.org/) for doing component-based UI development
- [Jest](https://facebook.github.io/jest/), and its accompanying libraries, as a unit-testing framework
- [React Router](https://reacttraining.com/react-router/) for client-side routing (i.e., navigating across URLs and supporting multiple pages)
- [Redux](http://redux.js.org/) as a global state management solution for caching your remote API's data
- [Airtable](https://airtable.com/) as a backend API and persistent data store
    - If Airtable has limitations that may keep you from accomplishing your specific project's goals, you may propose an alternative for instructor’s approval

## Development Process Requirements

You must...
- Practice component-first UI development with [Storybook](https://storybook.js.org/)
- Unit test your React component with [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/index.html). In particular:
  1. Make sure that props being passed in are in fact rendered as part of the output
  1. Make sure your action callbacks are triggered (with simulated events)
- Unit test your API helper functions w/ [Jest](https://facebook.github.io/jest/) and [`jest-fetch-mock`](https://github.com/jefflau/jest-fetch-mock)
- Unit test your Redux reducers with [Jest](https://facebook.github.io/jest/)
- Unit test your Redux thunks with [Jest](https://facebook.github.io/jest/)
- For both unit-testing and Storybook development, don't just account for the happy path. Make sure you're accounting for edge-cases and error conditions.
- Use [Redux DevTools Chrome Extension](http://extension.remotedev.io/) to debug/introspect your Redux state transitions
- Use `create-react-app`'s [environment variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) facility to extract and manage configuration variables that might change between your development environment and production environment.
- Use the code organization patterns we've seen in class
- Once you're done with development, deploy your application to any one of the following services:
  - [Surge](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#surge)
  - [Netlify](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#netlify)
  - [Heroku](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#heroku)
  - _NOTE: each of these services has its own nuances for how to get client-side routing working (e.g., React Router). You'll need to dig around the respective documentation and help articles -- Google it :)_

## Functional Requirements

You must build a CRUD application that...
- Has _at least_ 3 separate routes/pages. For example, a list view, a details view, and a save view
- Manages and persists at least 1 "entity" in Airtable (or approved alternative)
- Supports all 5 CRUD operations (Create, Retrieve-Many, Retrieve-One, Update, Delete) on your entities via Airtable's RESTful HTTP API
- Can sort a list of entities by some property (i.e., sort by "name", sort by "time created", etc.)
  - You can either support this feature client-side, or using Airtable's `sort` query parameter
- Can search/filter for a particular entity in a list by some property (i.e., find by "name")
  - You can either support this feature client-side, or using Airtable's `filterByForumla` query parameter
