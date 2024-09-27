type SeatProps = {
    seat: {
      id: string;
      status: 'occupied' | 'available' | 'reserved';
    };
    handleSeatClick: (id: string) => void;
};

export function Seat({ seat, handleSeatClick }:SeatProps) {
  return (
    <button
      key={seat.id}
      onClick={() => handleSeatClick(seat.id)}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor:
          seat.status === 'occupied'
            ? 'gray'
            : seat.status === 'reserved'
            ? 'orange' 
            : 'blue', 
        cursor: seat.status === 'occupied' ? 'not-allowed' : 'pointer',
        border: seat.status === 'reserved' ? '3px solid blue' : '1px solid black',
      }}
      disabled={seat.status === 'occupied'}
    >
      {seat.id}
    </button>
  );
}
