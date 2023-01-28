import './App.css';
import OrderDetails from "./components/OrderDetails";

function App() {

  


  return (
    <div className='App'>
      <div className='Header'>
        <div className='Logo'>
          <img className="LogoIcon" src="/images/logo192.png" />
          Billow
        </div>
        <img className="GearIcon" src="/images/gear-solid.svg" />
      </div>
      <OrderDetails />
    </div>
  );
}

export default App;
