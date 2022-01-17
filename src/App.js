import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import {createGlobalStyle} from 'styled-components'
import Anton from './fonts/Anton-Regular.ttf'


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Anton';
    src: url(${Anton});
  }
  body {
     padding: 0;
     margin: 0;
     font-family: 'Anton', 'sans-serif';
     letter-spacing: 0.01rem;
  }
`

function App() {
    return (
        <div>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<ProductList />} />
                    <Route path="/product/:itemId" exact element={<ProductDetail />} />
                    <Route path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
