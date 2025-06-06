import {useRef, useState, useCallback, useEffect} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {fetchUserPlaces, updateUserPlaces} from "./utils/http.js";
import ErrorPage from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  // loading status
  const [isFetching, setIsFetching] = useState(false);
  // error
  const [error, setError] = useState(null);
  // data
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(null);

  useEffect(() => {
    // fetchUserPlaces().then(userPlaces => {
    //   setUserPlaces(userPlaces);
    // });

    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const userPlaces = await fetchUserPlaces();
        setUserPlaces(userPlaces);
      } catch (err) {
        setError({message: err.message || 'Failed to fetch user places.'});
      } finally {
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    const isExistingPlace = userPlaces.some((place) => place.id === selectedPlace.id);
    if (isExistingPlace) {
      return;
    }

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    await updateToServer([selectedPlace, ...userPlaces]);
  }

  const updateToServer = async (updatingPlaces) => {
    try {
      await updateUserPlaces(updatingPlaces);
    } catch (err) {
      setErrorUpdatingPlaces({
        message: err.message || 'Failed to update places!' ,
      });
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    await updateToServer(
      userPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    setModalIsOpen(false);
  }, [userPlaces]);

  const handleError = () => {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces &&
          <ErrorPage
            title='An error occurred!'
            message={errorUpdatingPlaces.message}
          />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorPage
          title='An error occurred!'
          message={error.message}
        />}
        {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isFetching}
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
