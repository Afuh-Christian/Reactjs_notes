# Q1: How does React work?

-React creates a virtual DOM.
-When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM.
-The second step is reconciliation, where it updates the DOM with the results of diff.

# Q2: What is Context API in ReactJS?

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, we can avoid passing props through intermediate elements.

# Q3: What are props in React?

Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:
-Pass custom data to your React component.
-Trigger state changes.
-Use via this.props.reactProp inside component's render() method.

# Q4: What is the use of refs?

Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when we need direct access to DOM element or an instance of a component.
There are a few good use cases for refs:
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
Refs are created using React.createRef() and attached to React elements via the ref attribute.
Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

# Q5: What are the advantages of ReactJS?

-Increases the application’s performance with Virtual DOM
-JSX makes code is easy to read and write
-It renders both on client and server side
-Easy to integrate with other frameworks (Angular,BackboneJS) since it is only a view library
-Easy to write UI Test cases and integration with tools such as JEST.

# Q6: What are React Hooks?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

# Q7: How would you write an inline style in React?

<div style={{ height: 10 }}></div>

# Q8: What is React?

React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.

# Q9: What are the major features of ReactJS?

-It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
-Supports server-side rendering
-Follows Unidirectional data flow or data binding
-Uses reusable/composable UI components to develop the view
