
import Login from './login/Login';
import HeaderHome from './header/HeaderHome';
import FooterHome from './footer/FooterHome';
import ImagenHome from './imagen/ImagenHome';
import './Home.css';



export default function Home({setToken}) {
  return (
    <div className='containerHomePage'>
      <HeaderHome />
      <ImagenHome />
      <Login setToken={setToken}/>
      <FooterHome />
 
    </div>
  );
}

