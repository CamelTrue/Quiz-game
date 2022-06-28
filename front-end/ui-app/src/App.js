import './App.css';
import Header from './Header'
import DataFetching from './DataFetching';
import Login from './Login';

function App() {

    return (
        <div className="App">
            <Header/>
            <DataFetching />
            <Login />
        </div>
    );
}
    
export default App;