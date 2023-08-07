import './App.css';
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

const client = createClient('V8j8SdiBLLnLIPKIfzZdq7grRnpV4Vofw23V9u1BbG7wb1UsYYpt0Wyy');

function App() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    client.photos.show({ id: 1061142 }).then(photoData => {
      console.log(photoData);
      setPhoto(photoData);
    });
  }, []);

  console.log(photo);

  return (
    <div>
      <h1>Collection Photos</h1>
      {photo && (
        <div>
          <h2>{photo.title}</h2>
          <img src={photo.src.large} alt={photo.alt} />
        </div>
      )}
    </div>
  );
}

export default App;
