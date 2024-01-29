import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ArrivalInfo from "./components/ArrivalInfo";
import NotFound from './components/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='arrivalinfo/:id' element={<ArrivalInfo/>}/>
        <Route path="/*" element={<NotFound/>}></Route>
        <Route path="/arrivalinfo/*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
