import { rooms } from './data/rooms.js';

function RoomsList() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>🏨 Available Rooms</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {rooms.map(room => (
          <div key={room.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={room.image} alt={room.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2>{room.name}</h2>
            <p><b>Price:</b> ₹{room.price}/night</p>
            <p><b>Facilities:</b> {room.facilities.join(', ')}</p>
            <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsList;
