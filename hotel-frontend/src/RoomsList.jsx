import { rooms } from './data/rooms.js';

export default function RoomsList() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🏨 Available Rooms</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {rooms.map(room => (
          <div key={room.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '12px', 
            padding: '15px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            background: 'white'
          }}>
            <img 
              src={room.image} 
              alt={room.name} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
            />
            <h2 style={{ margin: '10px 0' }}>{room.name}</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>₹{room.price}/night</p>
            <p><b>Facilities:</b> {room.facilities.join(', ')}</p>
            <button style={{ 
              background: '#28a745', 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              width: '100%',
              marginTop: '10px'
            }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
