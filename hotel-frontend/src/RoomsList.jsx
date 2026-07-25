export default function RoomsList() {
  const rooms = [
    {id: 1, name: "Deluxe Room", price: 3500, facilities: ["AC", "WiFi", "TV"], image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"},
    {id: 2, name: "Suite Room", price: 6500, facilities: ["AC", "WiFi", "Bathtub"], image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400"},
    {id: 3, name: "Standard Room", price: 2000, facilities: ["Fan", "WiFi"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4aaec5?w=400"}
  ];

  return (
    <div style={{padding: '30px', background: '#f0f0f0'}}>
      <h1 style={{textAlign: 'center', color: 'red'}}>🏨 TEST: ROOMS LIST</h1>
      {rooms.map(room => (
        <div key={room.id} style={{border: '3px solid green', margin: '20px', padding: '15px', background: 'white'}}>
          <img src={room.image} style={{width: '100%', height: '200px'}} />
          <h2>{room.name}</h2>
          <p>PRICE: ₹{room.price}</p>
        </div>
      ))}
    </div>
  );
}
