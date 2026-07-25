import { rooms } from './data/rooms.js';

export default function RoomsList() {
  console.log("Rooms data:", rooms); // idi add chesa
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>🏨 Available Rooms</h1>
      
      <p>Total Rooms: {rooms.length}</p> 
      
      {rooms.length === 0 ? (
        <p style={{color: 'red'}}>Rooms data ledu bro!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {rooms.map(room => (
            <div key={room.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
              <img src={room.image} alt={room.name} style={{ width: '100%', height: '200px' }} />
              <h3>{room.name}</h3>
              <p>₹{room.price}/night</p>
              <p>{room.facilities.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
