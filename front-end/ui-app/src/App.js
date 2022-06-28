import './App.css';
import Header from './Header'
import InterfaceQuestion from './InterfaceQuestion';
import DataFetching from './DataFetching';

function App() {
    return (
        <div className="App">
            <Header/>
            <InterfaceQuestion />
            <DataFetching />
        </div>
    );
}
    
export default App;