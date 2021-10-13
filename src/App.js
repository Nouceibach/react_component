
import './App.css';
import Navpart from './Components/Navbar';
import Carouselpart from './Components/Carousel';
import Formpart from './Components/Formpart';
import ProfileFile from './Components/Profile/ProfileFile';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';

function App() {
  return (
    <div className="App">
    <Navpart />
    <FullName/>
  {/* carroussel part */}
    <Carouselpart/>
  {/* Profile part */} 
    <ProfileFile />
    <Adress/>
{/* Form Part */}
    <Formpart/>
    
  </div>
  );
}

export default App;
