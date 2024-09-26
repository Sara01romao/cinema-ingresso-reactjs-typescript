import { useState } from 'react';
import styles from './cinemaRoom.module.css';
import { TicketCart } from '../../components/ticketCart';

// Tipagem das poltronas
type Seat = {
  id: string;
  status: 'occupied' | 'selected' | 'reserved';
};

// Tipagem do ticket
export type Ticket = {
  seatId: string;
  type: 'inteira' | 'meia';
  price: number;
};

const rows = ['A', 'B', 'C', 'D', 'E'];
const cols = 8;

export function CinemaRoom() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [seats, setSeats] = useState<Seat[]>(
    rows.flatMap((row) =>
      Array.from({ length: cols }, (_, index) => ({
        id: `${row}${index + 1}`,
        status: 'selected',
      }))
    )
  );
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null); 
  const [ticketType, setTicketType] = useState<'inteira' | 'meia' | ''>(''); 

  const handleSeatClick = (id: string) => {
    // Abre o modal ao clicar na poltrona, se ela não estiver ocupada
    const seat = seats.find((s) => s.id === id);
    if (seat && seat.status !== 'occupied' && seat.status !== 'reserved') {
      setSelectedSeat(id);
    }
  };

   // Adiciona o ticket ao array de tickets
  const handleAddTicket = () => {
    if (selectedSeat && ticketType) {
      const price = ticketType === 'inteira' ? 22.5 : 11.25;

     
      setTickets((prevTickets) => [
        ...prevTickets,
        { seatId: selectedSeat, type: ticketType, price },
      ]);

      // Atualiza o status da poltrona para 'reserved'
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === selectedSeat ? { ...seat, status: 'reserved' } : seat
        )
      );

      
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedSeat(null);
    setTicketType(''); 
  };

  return (
    <div className={styles.container}>
      
      <div>
          <div style={{ background: 'grey', padding: '4px', marginBottom: '40px' }}>Tela</div>

          
          {/* Grid das poltronas */}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 50px)`, gap: '10px' }}>
            {seats.map((seat) => (
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
                      ? 'orange' // Reservada fica laranja
                      : 'blue', // Disponível ou selecionada
                  cursor: seat.status === 'occupied' ? 'not-allowed' : 'pointer',
                  border: seat.status === 'reserved' ? '3px solid blue' : '1px solid black',
                }}
                disabled={seat.status === 'occupied'}
              >
                {seat.id}
              </button>
            ))}
          </div>

         

      </div>

      <TicketCart  tickets={tickets}/>

       {/* Modal de seleção do tipo de ingresso */}
       {selectedSeat && (
            <div className={styles.modalContainer}>
              <div className={styles.modal} >

                <div className={styles.modalTitleContainer}>

                    <div className={styles.svgSeatDiv}>
                        <svg width="75" height="58" viewBox="0 0 75 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M64.9908 17.9043V12.6087C64.9908 9.26466 63.6743 6.05759 61.3309 3.693C58.9874 1.32841 55.8091 0 52.495 0H22.505C19.1909 0 16.0126 1.32841 13.6691 3.693C11.3257 6.05759 10.0092 9.26466 10.0092 12.6087V17.9043C7.18441 18.4831 4.64479 20.0295 2.82064 22.2814C0.996496 24.5334 0 27.3524 0 30.2609C0 33.1693 0.996496 35.9884 2.82064 38.2403C4.64479 40.4923 7.18441 42.0386 10.0092 42.6174V52.9565C10.0092 54.2941 10.5358 55.577 11.4732 56.5228C12.4105 57.4686 13.6819 58 15.0075 58H59.9925C61.3181 58 62.5895 57.4686 63.5268 56.5228C64.4642 55.577 64.9908 54.2941 64.9908 52.9565V42.6174C67.8156 42.0386 70.3552 40.4923 72.1794 38.2403C74.0035 35.9884 75 33.1693 75 30.2609C75 27.3524 74.0035 24.5334 72.1794 22.2814C70.3552 20.0295 67.8156 18.4831 64.9908 17.9043ZM22.505 5.04348H52.495C54.4834 5.04348 56.3905 5.84053 57.7965 7.25928C59.2026 8.67803 59.9925 10.6023 59.9925 12.6087V17.9043C57.1719 18.4895 54.6375 20.0381 52.8165 22.2889C50.9956 24.5398 49.9993 27.3553 49.9958 30.2609H25.0042C25.0007 27.3553 24.0044 24.5398 22.1835 22.2889C20.3625 20.0381 17.8281 18.4895 15.0075 17.9043V12.6087C15.0075 10.6023 15.7974 8.67803 17.2035 7.25928C18.6095 5.84053 20.5166 5.04348 22.505 5.04348ZM62.6135 37.8261H62.4916C61.8288 37.8261 61.1932 38.0918 60.7245 38.5647C60.2558 39.0376 59.9925 39.679 59.9925 40.3478V52.9565H15.0075V40.3478C15.0075 39.679 14.7442 39.0376 14.2755 38.5647C13.8068 38.0918 13.1712 37.8261 12.5084 37.8261H12.3865C10.9091 37.8019 9.47167 37.3377 8.25485 36.4918C7.03802 35.6459 6.09604 34.4561 5.54721 33.0718C4.99838 31.6875 4.86717 30.1704 5.17008 28.7111C5.47298 27.2517 6.19649 25.9153 7.24972 24.8695C8.30295 23.8238 9.63895 23.1154 11.0899 22.8333C12.5408 22.5512 14.042 22.708 15.405 23.2841C16.7679 23.8601 17.9317 24.8296 18.7503 26.0709C19.5688 27.3122 20.0057 28.7699 20.0058 30.2609V42.8696C20.0058 43.5384 20.2692 44.1798 20.7378 44.6527C21.2065 45.1256 21.8422 45.3913 22.505 45.3913C23.1678 45.3913 23.8035 45.1256 24.2722 44.6527C24.7409 44.1798 25.0042 43.5384 25.0042 42.8696V35.3043H49.9958V42.8696C49.9958 43.5384 50.2591 44.1798 50.7278 44.6527C51.1965 45.1256 51.8322 45.3913 52.495 45.3913C53.1578 45.3913 53.7935 45.1256 54.2622 44.6527C54.7309 44.1798 54.9942 43.5384 54.9942 42.8696V30.2609C54.9943 28.7699 55.4312 27.3122 56.2497 26.0709C57.0683 24.8296 58.2321 23.8601 59.595 23.2841C60.958 22.708 62.4592 22.5512 63.9101 22.8333C65.3611 23.1154 66.697 23.8238 67.7503 24.8695C68.8035 25.9153 69.527 27.2517 69.8299 28.7111C70.1328 30.1704 70.0016 31.6875 69.4528 33.0718C68.904 34.4561 67.962 35.6459 66.7451 36.4918C65.5283 37.3377 64.0909 37.8019 62.6135 37.8261Z" fill="black"/>
                        </svg>

                      </div>
                    <h2 className={styles.modalTitle}>
                    
                      
                    
                        {" Poltrona " + selectedSeat}
                        <p>Selecionada</p>
                      
                      
                    </h2>
                </div>
                

                <div className={styles.ticketTypeContainer}>
                  <h2>
                      Escolher Tipo do Ingresso
                  </h2>
                  <label className={`${ticketType === 'inteira' ? styles.labelSelected : styles.label}`}>
                    <input
                      type="radio"
                      value="inteira"
                      checked={ticketType === 'inteira'}
                      onChange={() => setTicketType('inteira')}
                    />

                    <p className={styles.priceModal}> Inteira  <span> R$ 22,50</span> </p>
                    
                    
                  </label>
                  
                  <label className={`${ticketType === 'meia' ? styles.labelSelected : styles.label}`}>
                    <input
                      type="radio"
                      value="meia"
                      checked={ticketType === 'meia'}
                      onChange={() => setTicketType('meia')}
                    />

                    
                      <p className={styles.priceModal}> Meia  <span> R$ 11,25</span> </p>
                      
                  
                    
                  </label>
                </div>

                <div className={styles.btnModal}>
                  <button onClick={handleAddTicket} disabled={!ticketType}>
                    Adicionar
                  </button>
                  <button onClick={handleCloseModal}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
