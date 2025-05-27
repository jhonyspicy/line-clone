import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase'; // Adjust the import path as necessary
import Line from './components/Line';

function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
