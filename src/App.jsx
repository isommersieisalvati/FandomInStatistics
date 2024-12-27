import "./App.css";
import Racebarchart from "./components/Racebarchart";
import Stackedbarchart from "./components/Stackedbarchart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Racebarchart />
            <Stackedbarchart />
            <Footer />
        </div>
    );
}

export default App;
