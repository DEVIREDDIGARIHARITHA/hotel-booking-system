import { useEffect, useState } from 'react';

function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/rooms')
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{padding: '20px'}}>
      <h2>🏨 Available Rooms</h2>
      {rooms.map(room => (
        <div key={room.id} style={{border: '2px solid #ddd', margin: '10px', padding: '15px', borderRadius: '8px'}}>
          <h3>{room.room_type} Room</h3>
          <p><b>Price:</b> ₹{room.price}</p>
          <p><b>Status:</b> {room.status}</p>
          {room.status === 'Available' && <button>Book Now</button>}
        </div>
      ))}
    </div>
  );
}

export default RoomsList;