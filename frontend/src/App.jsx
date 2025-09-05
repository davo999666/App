import './App.css'
import Footer from "./main/Footer.jsx";
import MainRoutes from "./main/Main.routes.jsx";
import Header from "./main/Header.jsx";
import { PageProvider } from "./context/PageContext.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {


  return (
      <div className="h-screen flex flex-col overflow-hidden">
          <PageProvider>
              <BrowserRouter>
                 <Header/>
                 <MainRoutes/>
                 <Footer />
              </BrowserRouter>
          </PageProvider>
      </div>

  )
}

export default App
