import './App.css';
import MasterHead from './components/MasterHead/MasterHead';
import { Outlet } from 'react-router-dom';



export default function App() {
  return (
    <div>
      <MasterHead />
      <Outlet />
    </div>
  );
}