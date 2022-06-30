import './App.css';
import Header from './Header'
// import DataFetching from './DataFetching';
import InterfaceQuestion from './InterfaceQuestion';
import Answer from './Answer';

function App() {
    return (
        <div className="App">
            <Header />
            <InterfaceQuestion />
            {/* <DataFetching /> */}
            <Answer />
        </div>
    );
}
    
export default App;