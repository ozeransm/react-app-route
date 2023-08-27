import  {Layout} from './Layout';
import {Home} from './Home';
import {About} from './About';
import {Dashboard} from './Dashboard';
import {NoMatch} from './NoMatch'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './redux/operation';
import { isRefresh } from './redux/selector';
import { PrivateRoute } from './PrivateRoute';

function App() {
  const refreshed=useSelector(isRefresh);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(refresh());
  },[dispatch]);
  return !refreshed &&(
    <div>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={
      <PrivateRoute component={<About />} />}/>
      <Route path="dashboard" element={<Dashboard />} />

      
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  </div>
  );
}

export default App;
