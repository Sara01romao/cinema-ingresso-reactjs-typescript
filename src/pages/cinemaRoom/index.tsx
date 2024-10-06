import { useEffect, useState } from 'react';
import styles from './cinemaRoom.module.css';
import { TicketCart } from '../../components/ticketCart';
import { Seat } from '../../components/seat';
import { Link, useParams } from 'react-router-dom';
import { movies, Movie } from '../../data/movies';
import { FaCartArrowDown, FaRegArrowAltCircleLeft } from 'react-icons/fa';

// Tipagem das poltronas
type Seat = {
  id: string;
  status: 'occupied' | 'available' | 'reserved';
};

// Tipagem do ticket
export type Ticket = {
  seatId: string;
  type: 'inteira' | 'meia';
  price: number;
};



export function CinemaRoom() {
  const { id } = useParams<{ id: string }>(); 
  const movie = movies.find((m:Movie) => m.id === Number(id)); 
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  if (!movie) {
      return <div>Filme não encontrado</div>; 
  }

  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = 8;

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null); 
  const [ticketType, setTicketType] = useState<'inteira' | 'meia' | ''>(''); 
  const [errorticketType, setErrorTicketType] = useState<boolean >(false); 
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const [mobileCart, setMobileCart] = useState<boolean>(true);

  const openMobileCar = () =>{
    console.log("Carrinho", mobileCart)
     setMobileCart(!mobileCart)
  }


  useEffect(()=>{
    const calculateTotalPrice = (tickets: Ticket[]) => {
      return tickets.reduce((total, ticket) => {
        return total + ticket.price;
      }, 0);
    };
    const total = calculateTotalPrice(tickets);
    setTotalToPay(total)
    

  },[tickets])


  useEffect(() => {
    if (movie && movie.schedule.length > 0) {
      const firstAvailableDay = movie.schedule[0].day;
      const firstAvailableTime = movie.schedule[0].hours[0];
      setSelectedDay(firstAvailableDay); 
      setSelectedTime(firstAvailableTime); 
      handleTimeSelect(firstAvailableDay, firstAvailableTime);
    }


  }, [movie]);

  const handleTimeSelect = (day: string, time: string) => {
    setSelectedDay(day);
    setSelectedTime(time); 
    setTickets([]);

    setSeats(
      rows.flatMap((row) =>
        Array.from({ length: cols }, (_, index) => ({
          id: `${row}${index + 1}`,
          status: Math.random() < 0.3 ? 'occupied' : 'available',
        }))
      )
    );

    
  };
  

  const handleSeatClick = (id: string) => {
      const seat = seats.find((s) => s.id === id);
      if (seat && seat.status !== 'occupied' && seat.status !== 'reserved') {
        setSelectedSeat(id);
      }
    
  };

   // Adiciona o ticket 
   const handleAddTicket = () => {
      if (ticketType === '') {
        setErrorTicketType(true);
        return;
      }

      console.table(tickets)
    
    if (selectedSeat && ticketType && selectedTime) {
        const price = ticketType === 'inteira' ? 22.5 : 11.25;
    
        setTickets((prevTickets) => [
          ...prevTickets,
          {
            seatId: selectedSeat,
            type: ticketType,
            price,
            movieName: movie?.name ,
            movieTime: movie?.time ,
            movieRoom: movie?.room ,
            dayOfWeek:selectedDay,
            selectedDate: new Date().toLocaleDateString(), 
            selectedTimeBuy: new Date().toLocaleTimeString(),
            selectedTime, 
          
          },
        ]);
      
      // Atualiza o status da poltrona para 'reserved'
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === selectedSeat ? { ...seat, status: 'reserved' } : seat
        )
      );
  
      setErrorTicketType(false);
      handleCloseModal();
    }
  };
 
  const handleRemoveTicket = (seatId: string) => {

    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.seatId !== seatId)
    );

   
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, status: 'available' } : seat
      )
    );
  };


  const handleCloseModal = () => {
    setSelectedSeat(null);
    setTicketType(''); 
  };


  const handleBuyTicket = (tickets:Ticket[]) =>{
    console.table(tickets)
    console.log("finalizar")
  }

  const formatDay = (fullDayString:string) => {
    const [dayOfWeek, date] = fullDayString.split(", ");
    
    const shortDate = date.slice(0, 5); 
  
    return `${dayOfWeek}- ${shortDate}`;
  };

  return (

    <>
      <div className={styles.roomHeader} >
        <Link to="/" className={styles.linkBack}>  <FaRegArrowAltCircleLeft size={30} />Voltar</Link>
        <h1>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="4" fill="#FFCE00"></rect><path d="M23.25 12.25C23.4489 12.25 23.6397 12.171 23.7803 12.0303C23.921 11.8897 24 11.6989 24 11.5V8.5C24 8.10218 23.842 7.72064 23.5607 7.43934C23.2794 7.15804 22.8978 7 22.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V11.5C3 11.6989 3.07902 11.8897 3.21967 12.0303C3.36032 12.171 3.55109 12.25 3.75 12.25C4.34674 12.25 4.91903 12.4871 5.34099 12.909C5.76295 13.331 6 13.9033 6 14.5C6 15.0967 5.76295 15.669 5.34099 16.091C4.91903 16.5129 4.34674 16.75 3.75 16.75C3.55109 16.75 3.36032 16.829 3.21967 16.9697C3.07902 17.1103 3 17.3011 3 17.5V20.5C3 20.8978 3.15804 21.2794 3.43934 21.5607C3.72064 21.842 4.10218 22 4.5 22H22.5C22.8978 22 23.2794 21.842 23.5607 21.5607C23.842 21.2794 24 20.8978 24 20.5V17.5C24 17.3011 23.921 17.1103 23.7803 16.9697C23.6397 16.829 23.4489 16.75 23.25 16.75C22.6533 16.75 22.081 16.5129 21.659 16.091C21.2371 15.669 21 15.0967 21 14.5C21 13.9033 21.2371 13.331 21.659 12.909C22.081 12.4871 22.6533 12.25 23.25 12.25ZM4.5 18.175C5.34772 18.0029 6.10986 17.543 6.65728 16.8732C7.20471 16.2034 7.50376 15.365 7.50376 14.5C7.50376 13.635 7.20471 12.7966 6.65728 12.1268C6.10986 11.457 5.34772 10.9971 4.5 10.825V8.5H9.75V20.5H4.5V18.175ZM22.5 18.175V20.5H11.25V8.5H22.5V10.825C21.6523 10.9971 20.8901 11.457 20.3427 12.1268C19.7953 12.7966 19.4962 13.635 19.4962 14.5C19.4962 15.365 19.7953 16.2034 20.3427 16.8732C20.8901 17.543 21.6523 18.0029 22.5 18.175Z" fill="black"></path></svg>
          Escolher Ingresso
        </h1>
      </div>
      <div className={styles.containerCineRoom}>
        <div className={styles.aboutMovieRoom}>

          <div className={styles.titleMovieRoom}>
            <img src={`/assets/${movie.img}`} width={100} height={150} alt={movie.name} />
            <div className={styles.titleRoom}>
              <h1>{movie.name}</h1>
              <p>Tempo: {movie.time}</p>
              <p>{movie.room}</p>
            </div>
            
          </div>
            
            {/* Mostra os horários */}
            <div className={styles.scheduleContainer}>
              <h3 className={styles.titleSchedule}>Selecionar Dia e Horário</h3>
              <div className={styles.scheduleItems}>

                {movie.schedule.map((schedule, index) => (
                  <div  key={index}>
                      <h4 key={schedule.day}>
                        {formatDay(schedule.day)}
                      </h4>
                      <div className={styles.scheduleButtonsContainer} >
                        {schedule.hours.map((hour) => (
                        
                            <button
                              key={hour}
                              onClick={() => handleTimeSelect(schedule.day, hour)}
                              style={{
                                backgroundColor: selectedDay === schedule.day && selectedTime === hour ? '#FFBE3C' : 'white',
                              }}
                            >
                              {hour}
                          </button>
                      
                        ))}
                      </div>
                  </div>
                ))}

                    
              </div>
            </div>

            <div className={styles.seatsRoomContainer}>
                <div className={styles.screenRoomContainer} style={{ background: 'grey', padding: '4px', marginBottom: '40px' }}>Tela</div>

                {/* Grid das poltronas */}
                <div className={styles.seatList} >
                  {seats.map((seat) => (
                    <Seat key={seat.id} seat={seat} handleSeatClick={handleSeatClick} />
                  ))}
                </div>
            
            </div>


        </div>

        <TicketCart
          movie={movie.name}
          movieTime={selectedTime}
          dayOfWeek={selectedDay}
          tickets={tickets} 
          total={totalToPay} 
          onRemoveTicket={handleRemoveTicket}
          handleBuyTicket={handleBuyTicket}
          handleOpenCart={openMobileCar}
          mobileCart={mobileCart}
          />

    
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

                      <p className={styles.priceModal}>  Inteira  <span> R$ 22,50</span> </p>
                      
                      
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

                  { errorticketType && <p className={styles.erroType}>Selecione o tipo do ingresso </p>}
                  
                  <div className={styles.btnModal}>
                    <button onClick={handleAddTicket} >
                      Adicionar
                    </button>
                    <button onClick={handleCloseModal}>Cancelar</button>
                  </div>
                </div>
              </div>
            )}



    
      </div>
    </>
  );
}
