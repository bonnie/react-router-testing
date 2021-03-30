import { useParams, Link } from "react-router-dom";

export default function Locations() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.

  const { id } = useParams();

  // in a real app, this info would come from the server
  const locationData = {
    "san-francisco": {
      name: "San Francisco",
      address: "123 Main Street",
    },
    berkeley: {
      name: "Berkeley",
      address: "456 First Street",
    },
    oakland: {
      name: "Oakland",
      address: "789 Elm Street",
    },
  };

  // no id? then just list links for all the locations
  if (!id) {
    return (
      <div>
        <h1>Locations</h1>
        <ul>
          {Object.entries(locationData).map(([id, data]) => {
            return (
              <li key={id}>
                <Link to={`/locations/${id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  // if there's an id URL parameter, give information about this location
  const data = locationData[id];

  return (
    <div>
      <h1>Location: {data.name}</h1>
      <p>{data.address}</p>
    </div>
  );
}
