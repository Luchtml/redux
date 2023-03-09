import React from 'react';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';
import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/modules/reserve/actions';

const Home = () => {
  const [trips, setTrips] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');
      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong> {trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
            <button type="button" onClick={() => handleAdd(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
