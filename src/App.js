import './App.css';
import Profile from './profile/Profile';
function App() {
const name = "khachaa badis"
const biographie = "Looking for new opportunities"
const job = "IT support tech"
const fn = () => alert(name)
 
  return (

    <div className="App">
      <Profile fullname={name} bio={biographie} profession={job} age = {25} greeting={fn} ><img src="/badis.jpg" width="500"></img></Profile>
    </div>
  );
}

export default App;
