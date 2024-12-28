import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  currentCity: {},
  isLoading: false,
  error: "",
};

function loadCitiesFromLocalStorage() {
  const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
  return savedCities;
}

function reducer(state, action) {
  switch (action.type) {
    case "loaded":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, cities: action.payload, isLoading: false };

    case "city/loaded":
      return { ...state, currentCity: action.payload, isLoading: false };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown Action.");
  }
}

function CityProvider({ children }) {
  const [{ cities, currentCity, isLoading }, dispatch] = useReducer(reducer, {
    ...initialState,
    cities: loadCitiesFromLocalStorage(),
  });

  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem("cities", JSON.stringify(cities));
    }
  }, [cities]);
  const getCity = useCallback(
    function getCity(id) {
      if (!id) return;
      dispatch({ type: "loaded" });
      try {
        const city = cities.find((city) => city.id === parseInt(id));
        if (city) {
          dispatch({ type: "city/loaded", payload: city });
        } else {
          dispatch({
            type: "rejected",
            payload: `City with ID ${id} not found.`,
          });
        }
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: `Error loading city with ID ${id}: ${error.message}`,
        });
      }
    },
    [cities]
  );

  function createCity(newCity) {
    dispatch({ type: "loaded" });

    const newCityWithId = {
      ...newCity,
      id: Date.now(),
    };

    dispatch({ type: "city/created", payload: newCityWithId });
  }

  function deleteCity(id) {
    dispatch({ type: "loaded" });
    dispatch({ type: "city/deleted", payload: id });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CityProvider, useCities };
