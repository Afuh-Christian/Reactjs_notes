
# Q113: What is a Pure Function?  
Pure functions take some input and return some output based on that input.
# Q114: What is React Fiber?  
React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long-standing issues in React.
# Q115: Explain some difference between Flux and AngularJS (1.x) approach  

# Q116: How to avoid the need for binding in React?  
To avoid the need for binding we have something introduced in ES6 as arrow functions. Using the arrow function to call this. setState will lead to avoid the use of bind.
# Q117: What is the key architectural difference between a JavaScript library such as React and a JavaScript framework such as Angular?  
Angular is a full-fledged framework, while React is a library. React. js uses virtual DOM and one-way data binding while Angular operates on real DOM & two-way data binding. There's also a difference in bundle size (React's smaller) and speed (React works a bit faster).
# Q118: How does React renderer work exactly when we call setState?   
When the request to setState() is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state). This tree is used to figure out how the Search component's UI should change in response to the state change by comparing it with the elements of the previous tree.
# Q119: How to use React.memo()?  
Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance. This section uses React Hooks.
# Q120: Can a custom React hook return JSX?  Related To: React Hooks
Do two components using the same Hook share state? No. Custom Hooks are a mechanism to reuse stateful logic
# Q121: What is the order of useInsertionEffect, useEffect and useLayoutEffect hooks at component generation ?  
It will run after the render is committed to the screen. So it runs after useLayoutEffect . Therefore the order of running is: useInsertionEffect.
# 