import './App.css';
import Project from './components/Project'
import Users from './components/Users'
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <Project />
      <Users />
    </div>
  );
}

export default App;