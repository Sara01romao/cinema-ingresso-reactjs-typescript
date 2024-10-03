import styles from'./seat.module.css'

type SeatProps = {
    seat: {
      id: string;
      status: 'occupied' | 'available' | 'reserved';
    };
    handleSeatClick: (id: string) => void;
};

export function Seat({ seat, handleSeatClick }:SeatProps) {
  return (
    <button className={`${styles.seat} ${seat.status === 'occupied' ? styles.occupied : seat.status === 'reserved' ? styles.reserved : ''}`}
      key={seat.id}
      onClick={() => handleSeatClick(seat.id)}
      
      disabled={seat.status === 'occupied'}
    >
      {seat.id}
    </button>
  );
}
