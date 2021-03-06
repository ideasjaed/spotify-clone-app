import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { getTokenFormUrl } from './spotify';
import './App.css';
import Login from './Components/Login';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken ] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists
        });
      });
    }


    console.log('es el token 👉', token)
  }, []);

      console.log('👧', user);
      console.log('👽', token);

  return (  
    
    <div className="App"> {token ? <Player spotify={spotify} /> : <Login />}</div>
  );
}

export default App;
