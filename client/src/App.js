import './App.css';
import {Toaster} from 'react-hot-toast'
import Upload from './components/upload';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Upload />
    </div>
  );
}

export default App;
