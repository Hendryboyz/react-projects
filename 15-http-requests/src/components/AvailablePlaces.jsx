import Places from './Places.jsx';
import {useEffect, useState} from "react";
import {flushSync} from "react-dom";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch retrieval
  // useEffect(() => {
  //   fetch('http://localhost:3000/places').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     setAvailablePlaces(data.places);
  //   });
  // }, []);

  const fetchPlaces = async () => {
    setIsLoading(true);
    const resp = await fetch('http://localhost:3000/places');
    const data = await resp.json();
    setAvailablePlaces(data.places);
    setIsLoading(false);
  };

  useEffect(() => {
    // fetchPlaces().then(places => {
    //   setAvailablePlaces(places);
    // });
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
    />
  );
}
