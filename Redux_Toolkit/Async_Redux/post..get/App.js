import './App.css';
import PostList from './Sign_up_Form/features/post/PostList'
import AddPostForm from './Sign_up_Form/features/post/AddPostForm';

function App() {
  return (
    <div className="App">
     <div>
     <div><AddPostForm/></div>
      <div><PostList/></div>
     </div>
    </div>
  );
}

export default App;
