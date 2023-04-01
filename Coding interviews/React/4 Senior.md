
# Q86: What is the purpose of super(props)?  
super() is used to call the parent constructor. super(props) would pass props to the parent constructor. From your example, super(props) would call the React.
# Q87: Explain the Virtual DOM concept in React  
What is the Virtual DOM? The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
# Q88: Describe Flux vs MVC?  Related To: ASP.NET MVC
Flux uses 'Stores' to cache any application associated with data or state whereas MVC model attempts to model a single object. MVC doesn't have the concept of the Store. The Store is more like a model in MVC, but it handles the state of several objects instead of just denoting a single database record.
# Q89: Why doesn't this.props.children.map work?  
this.props.children is an opaque data structure. It can be either an array or a single element.
# Q90: Can you force a React component to rerender without calling setState?  
Method 2: Using the forceUpdate() method will force the re-render of the component. Caution: Even though forceUpdate solves our problem but it is advised to use setState or changing props to re-render a component as forceUpdate method skips the proper lifecycle of rendering of a component.
# Q91: Describe how events are handled in React  
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.
# Q92: What's a Pure Functional Component in React?  
A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.
# Q93: What is the second argument that can optionally be passed to setState and what is its purpose?  
The second argument that can optionally be passed to setState is a callback function which gets called immediately after the setState is completed and the components get re-rendered.
# Q94: Why would you need to bind event handlers to this?  
ES6 class uses “strict mode” by default, therefore the scope of this keyword of the above regular function will be undefined. Therefore it is necessary to bind your event handler so no matter what, whenever the event handler is called it will always refer to the object it is bound to.
# Q95: Why does React use SyntheticEvents?  
Cross browsers applications are easy to implement. Synthetic events are that ReactJS reuses these events objects, by pooling them, which increase the performance.
# Q96: How to apply validation on props in ReactJS?  
React JS has an inbuilt feature for validating props data type to make sure that values passed through props are valid. React components have a property called propTypes which is used to setup data type validation. Syntax: The syntax to use propTypes is shown below. class Component extends React.
# Q97: How to create Props Proxy for HOC component?  
function HOC(WrappedComponent) {
return class Test extends Component {
render() {
const newProps = {
title: 'New Header',
footer: false,
showFeatureX: false,
showFeatureY: true,



search.........
# Q98: What is the difference between using constructor vs getInitialState in React?  
https://www.geeksforgeeks.org/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react/
# Q99: When is it important to pass props to super(), and why?  
Explanation: If we want to use this in the constructor, we need to pass it to super. If we want to use this. props inside the constructor we need to pass it with the super() function. Otherwise, we don't want to pass props to super() because we see this.
# Q100: How to conditionally add attributes to React components?  
https://stackoverflow.com/questions/31163693/how-do-i-conditionally-add-attributes-to-react-components
# Q101: When would you use StrictMode component in React?  
StrictMode currently helps with:
Identifying components with unsafe lifecycles.
Warning about legacy string ref API usage.
Warning about deprecated findDOMNode usage.
Detecting unexpected side effects.
Detecting legacy context API.
Ensuring reusable state.
# Q102: How would you go about investigating slow React application rendering?  
Investigate other performance problems
Analytics tracking libraries, excessive CSS animations, non-optimized images, iframes, and many more factors can contribute to poor performance. You can use the Chrome DevTools Performance tab to debug these issues.
# Q103: Does React re-render all components and sub components every time setState is called?  
Does React re-render all components and sub-components every time setState is called? By default - yes.
# Q104: What's the difference between useCallback and useMemo in practice?  Related To: React Hooks
useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
# Q105: Explain why and when would you use useMemo()?  Related To: React Hooks
You can use useMemo when you are working on functions where the inputs gradually change, where data values aren't large enough to cause memory issues, or if the parameters are large enough so that the cost of comparison doesn't outweigh the use of the wrapper
# Q106: When to use useCallback, useMemo and useEffect?  Related To: React Hooks

# Q107: Can you do Components Inheritance in React?  
Inheritance allows the app to do the coupling between the parent-child component and reuse properties such as state values and function in its child components. React does not use inheritance except in the initial component class, which extends from the react package.
# Q108: What is difference between Incremental DOM and Virtual DOM?  Related To: Angular
Virtual DOM generates a whole tree from scratch every time you rerender. On the other hand, Incremental DOM doesn't require any memory to re-render the view if it doesn't change the DOM. We only need to allocate the memory when the DOM nodes are added or removed
# Q109: When would you use flushSync in ReactJS?  Related To: React Hooks
https://codingshower.com/react-flushsync/
# Q110: When shall we use useReducer hook in ReactJS?  Related To: React Hooks
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
# Q111: When to use useState vs useReducer?  Related To: React Hooks
useState vs. useReducer. useState is a basic Hook for managing simple state transformation, and useReducer is an additional Hook for managing more complex state logic. However, it's worth noting that useState uses useReducer internally, implying that you could use useReducer for everything you can do with useState 
# Q112: How would you store non-state/instance variables in functional React components?  Related To: React Hooks


# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 