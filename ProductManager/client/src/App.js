
import {Routes,Route,Link,Navigate}  from  'react-router-dom'
import Forms from './components/Forms';
import AllProducts from './components/AllProducts';
import OneProduct from  './components/Showone';
import EditProduct from './components/Editproduct';
import  {useState}  from  'react';

function App() {
  let[formSubmitted,setFormSubmitted]=useState(false);
  return (
    <div className="App">
      <h1>Product Manager</h1>
      {/* 
      Front-end  routes  that  displays  or  show view  components
      seperate  from server routes
       */}
       <Routes>
        <Route exact path="/"  element={
          <>
          <Forms formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Forms>
          <hr></hr>
          <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </>
        }></Route>
        </Routes>

        <Routes>
        <Route exact path="/products/:id"  element={<OneProduct/>}></Route>
        <Route  exact path="/products/edit/:id" element={<EditProduct/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
