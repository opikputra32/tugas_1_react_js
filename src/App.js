// import logo from './logo.svg';
// import './App.css';
import MenuUtama from "./Page/MenuUtama";
import MenuProduct from "./Page/MenuProduct";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";

const Footer = () => {
  return (  
    <h3>Ini Halaman Untuk Footer</h3>
  );
}
const Header = () => {
  return (  
    <h3>Ini Halaman Untuk Header</h3>
  );
}
 
 

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
