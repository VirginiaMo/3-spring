
import Login from './login/Login';
import HeaderHome from './header/HeaderHome';
import FooterHome from './footer/FooterHome';
import ImagenHome from './imagen/ImagenHome';
import './Home.css'


function Home() {
  return (
    <div className='containerHomePage'>
      <HeaderHome />
      <ImagenHome />
      <Login />
      <FooterHome />
 
    </div>
  );
}

export default Home;