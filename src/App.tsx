import "./App.css";
// icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// compont
import Header from "./componots/Nav/Header";
import Sidebar from "./componots/sidebar/Sidebar"
import MainLay from "./layout/MainLay";
function App() {

  return (
    <>
    <Header/>
    <Sidebar />
    <MainLay />
    </>
  )
}

export default App
