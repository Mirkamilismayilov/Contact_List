import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NewContact from "./components/NewContact";
import MainLayout from "./components/MainLayout";
import EditContact from "./components/EditContact";



function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<MainLayout/>}>

      </Route>
   
      <Route path="newContact" element={<NewContact/>}/>
      <Route path="EditContact/:id" element={<EditContact/>}/>
         
    </Routes>
    </>
    
  );
}

export default App;
