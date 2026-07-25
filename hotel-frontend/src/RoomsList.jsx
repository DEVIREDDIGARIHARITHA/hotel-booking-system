export default function RoomsList() {
  const rooms = [
    {id: 1, name: "Deluxe Room", price: 3500, facilities: ["AC", "WiFi", "TV", "Geyser"], image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"},
    {id: 2, name: "Suite Room", price: 6500, facilities: ["AC", "WiFi", "Bathtub", "Balcony"], image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400"},
    {id: 3, name: "Standard Room", price: 2000, facilities: ["Fan", "WiFi", "TV"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4aaec5?w=400"}
  ];

  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center'}}>🏨 Available Rooms</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px'}}>
        {rooms.map(room => (
          <div key={room.id} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '10px', background: 'white'}}>
            <img src={room.image} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <h3>{room.name}</h3>
            <p><b>₹{room.price}/night</b></p>
            <p>{room.facilities.join(', ')}</p>
            <button style={{background: 'green', color: 'white', padding: '10px', width: '100%'}}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
