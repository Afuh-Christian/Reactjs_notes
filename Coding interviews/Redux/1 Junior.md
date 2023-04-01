# Q5: What is the difference between Component and Container in Redux?  Related To: React
Answer

Component is part of the React API. A Component is a class or function that describes part of a React UI.

Container is an informal term for a React component that is connected to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.
# Q6: What are the features of Redux DevTools?  
Below are the major features of Redux devTools 1. Lets you inspect every state and action payload 2. Lets you go back in time by “cancelling” actions 3. If you change the reducer code, each “staged” action will be re-evaluated 4. If the reducers throw, you will see during which action this happened, and what the error was 5. With persistState() store enhancer, you can persist debug sessions across page reloads
# Q7: What are reducers in redux?  
Answer
The reducer is a pure function that takes the previous state and an action, and returns the next state.
(previousState, action) => newState
It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:
Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
# Q8: What are Redux selectors and Why to use them?  
Selectors are functions that take Redux state as an argument and return some data to pass to the component. For example, to get user details from the state:
const getUserData = state => state.user.data;
# Q9: How to structure Redux top level directories?  
Answer
Most of the applications has several top-level directories as below 1. Components Used for “dumb” React components unaware of Redux 2. Containers Used for “smart” React components connected to Redux 3. Actions Used for all action creators, where file name corresponds to part of the app 4. Reducers Used for all reducers, where file name corresponds to state key 5. Store Used for store initialization This structure works well for small and mid-level size apps.
# Q10: How to set initial state in Redux?  
Answer
You need to pass initial state as second argument to createStore

const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

const initialState = {
  todos: [{id:123, name:'sudheer', completed: false}]
};

const store = createStore(
  rootReducer,
  initialState
);
# Q11: What is Redux Thunk?  
Answer
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState() as parameters.
# Q12: What is redux-saga?  
Answer
redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better. It is available in NPM as
# Q13: What are the core principles of Redux?  
Answer
Redux follows three fundamental principles: 1. Single source of truth: The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application. 2. State is ready only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. 3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers(Reducers are just pure functions that take the previous state and an action, and return the next state).
# Q14: What is the difference between React context and React redux?  
Answer
You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas Redux is much more powerful and provides a large number of features that the Context Api doesn't provide.
Also, React Redux uses context internally but it doesn’t expose this fact in the public API. So you should feel much safer using context via React Redux than directly because if it changes, the burden of updating the code will be on React Redux instead developer responsibility.
# Q15: How to add multiple middlewares to Redux?  
Answer
You can use applyMiddleware where you can pass each piece of middleware as a new argument. So you just need to pass each piece of middleware you'd like. For example, you can add Redux Thunk and logger middlewares as an argument as below,
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
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