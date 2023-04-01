# Q43: How would you prevent a component from rendering in React?  

If you're using a React class component you can use the shouldComponentUpdate method or a React. PureComponent class extension to prevent a component from re-rendering.


# Q44: What is {this.props.children} and when you should use it?  
Essentially, props. children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.

# Q45: Name the different lifecycle methods for a class components  
There are three categories of lifecycle methods: mounting, updating, and unmounting. A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called. The first time that a component instance renders, it does not update.

# Q46: What are Stateless components in React?  
Stateless components are those components which don't have any state at all, which means you can't use this. setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.
# Q47: What is the difference between createElement and cloneElement?  
createElement is the code that JSX gets compiled or converted into and is used by reacting to create elements. cloneElement is used for cloning elements and passing them new props. This method is used to describe how the User Interface looks. This method is used to manipulate the elements.
# Q48: Are you familiar with Flux in the context of React?   
Flux is a pattern for managing how data flows through a React application. As we've seen, the preferred method of working with React components is through passing data from one parent component to it's children components. The Flux pattern makes this model the default method for handling data.
# Q49: What is the significance of keys in ReactJS?  
Keys help React identify which items have changed, are added, or are removed.
# Q50: What's the typical pattern for rendering a list of components from an array in React?   
The pattern for rendering a list of components from an array of data can be done by mapping all individual custom pieces of data to the component. With the map function, we will map every element data of the array to the custom components in a single line of code
# Q51: What does shouldComponentUpdate do and why is it important?  
What does “shouldComponentUpdate” do and why is it important ? The shouldComponentUpdate is a lifecycle method in React. This method makes the component to re-render only when there is a change in state or props of a component and that change will affect the output.
# Q52: What's the typical flow of data like in a React + Redux app?  
Redux follows the unidirectional data flow. It means that your application data will follow in one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application.
# Q53: What's the difference between an Element and a Component in React?  
A React element is an object representation of a DOM node. A component encapsulates a DOM tree. Elements are immutable i,e once created cannot be changed. The state in a component is mutable.
# Q54: What are some limitations of things you shouldn't do in the component's render method in React?  
What are some limitations of things you shouldn't do in the component's render method? A: You cannot modify the component's state (with setState), nor interact with the browser (do that in componentDidMount). render should be a pure function.
# Q55: What is the point of shouldComponentUpdate() method?  
Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
# Q56: What are Pure Components?  
A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components
# Q57: What is the difference between HTML and React event handling?  
Event handling in HTML and React are different from one another in terms of syntax and some rules. The reason behind this is that React works on the concept of virtual DOM, on the other hand, the HTML has access to the Real DOM all the time
# Q58: How to bind methods or event handlers in JSX callbacks?  
https://iq.js.org/questions/react/how-to-bind-methods-or-event-handlers-in-jsx-callbacks
# Q59: What is Lifting State Up in ReactJS?  
In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
# Q60: What are the lifecycle methods of ReactJS class components?  
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.
# Q61: What are the different phases of ReactJS component lifecycle?  
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

# Q62: What are Error Boundaries in ReactJS?  
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
# Q63: Why we should not update state directly?  
One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this. state immediately.
# Q64: What are forward refs?  
The forwardRef method in React allows parent components to move down (or “forward”) refs to their children. ForwardRef gives a child component a reference to a DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used
# Q65: What is children prop?  
The React children prop is an important concept for creating reusable components because it allows components to be constructed together. However, a common issue with using React with Typescript is figuring out which data type to use with React children since Typescript is a strongly typed library.
# Q66: What would be the common mistake of function being called every time the component renders?  
What would be the common mistake of function being called every time the component renders? You need to make sure that function is not being called while passing the function as a parameter. // Wrong: handleClick is called instead of passed as a reference! // Correct: handleClick is passed as a reference!
# Q67: What is the difference between ShadowDOM and VirtualDOM?  
In short, the shadow DOM is a browser technology whose main objective is to provide encapsulation when creating elements. On the other hand, the virtual DOM is managed by JavaScript libraries—e.g., React—and it's mostly a strategy to optimize performance.
# Q68: What are Uncontrolled components?  
Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.3 Mar 2022
It accepts the current value as props: We access ...
Internal state is not maintained: Internal state is ...

# Q69: What is Key and benefit of using it in lists?  
Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required
# Q70: Why React uses className over class attribute?  
Explanation: The only reason behind the fact that it uses className over class is that the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript, so we have to use className instead of class attribute.
# Q71: What is prop drilling and how can you avoid it?  
Prop drilling is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. The problem with this approach is that most of the components through which this data is passed have no actual need for this data.
# Q72: What's the difference between useRef and createRef?  
useRef: The useRef is a hook that uses the same ref throughout. It saves its value between re-renders in a functional component and doesn't create a new instance of the ref for every re-render. It persists the existing ref between re-renders. createRef: The createRef is a function that creates a new ref every time.
# Q73: What is StrictMode in React?  
StrictMode is a tool for highlighting potential problems in an application. Like Fragment , StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Note: Strict mode checks are run in development mode only; they do not impact the production build.
# Q74: Why do class methods need to be bound to a class instance?  
This is because whenever inside a class component when we need to pass a function as props to the child component, we have to do one of the following: Bind it inside the constructor function. Bind it inline (which can have some performance issues). Use arrow function (which is the same as property initializer syntax).
# Q75: What do these three dots (...) in React do?  
(three dots in JavaScript) is called the Spread Syntax or Spread Operator. This allows an iterable such as an array expression or string to be expanded or an object expression to be expanded wherever placed.
# Q76: What's wrong with using Context in React?  
The problem with context is simple: Everything that consumes a context re-renders everytime that context's state changes. That means that if you're consuming your context all over the place in your app, or worse, using one context for your entire app's state, you're causing a ton of re-renders all over the place!
# Q77: What is Components Composition in React?  
What is component composition in React? In React, we can make components more generic by accepting props, which are to React components what parameters are to functions. Component composition is the name for passing components as props to other components, thus creating new components with other components.
# Q78: What does Batching mean in ReactJS?  Related To: React Hooks
React uses batching to group state updates within event handlers and inbuilt hooks. It prevents components from re-rendering for each state update and improves application performance. React 17, and prior versions only support batching for browser events.
# Q79: What are the advantages of Batching in ReactJS?  Related To: React Hooks
React uses batching to group state updates within event handlers and inbuilt hooks. It prevents components from re-rendering for each state update and improves application performance.

# Q80: Which lifecycle methods of class component is replaced by useEffect in functional component?  Related To: React Hooks

# Q81: Compare useState and useReducer implementations  Related To: React Hooks
useState vs. useReducer. useState is a basic Hook for managing simple state transformation, and useReducer is an additional Hook for managing more complex state logic. However, it's worth noting that useState uses useReducer internally, implying that you could use useReducer for everything you can do with useState 
# Q82: Do React Hooks cover all use cases for class components?  Related To: React Hooks
You can't use Hooks inside a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component.
# Q83: How can I make use of Error Boundaries in functional React components?  Related To: React Hooks
 In order to use Error Boundary in Functional Component, I use react-error-boundary. When we run this application, we will get a nice error display form the content of ErrorHandler component. React error boundary catches any error from the components below them in the tree
# Q84: When would you use useRef?  Related To: React Hooks
One of the most common use case of useRef hook is to access DOM elements (NOT custom React component). For example if you want to access an input element after it has been mounted to the DOM, instead of using document. getElementById, document.
# Q85: How would you pass data from child to parent component in React?  
Pass a function as a prop to the Child component. Call the function in the Child component and pass the data as arguments. Access the data in the function in the Parent .
