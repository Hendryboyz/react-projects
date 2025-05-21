import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorPage from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../utils/http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // data
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // loading status
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState(null);


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
    try {
      const places = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const sortedPlaces = sortPlacesByDistance(places, latitude, longitude);
        setAvailablePlaces(sortedPlaces);
      }, () => {
        setAvailablePlaces(places)
      });
    } catch(err) {
      setError({ message: err.message || 'Could not fetch places, please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchPlaces().then(places => {
    //   setAvailablePlaces(places);
    // });
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage
      title={'An error occurred!'}
      message={error.message}
    />;
  }

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
