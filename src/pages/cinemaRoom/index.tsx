import { useEffect, useState } from 'react';
import { TicketCart } from '../../components/ticketCart';
import { Seat } from '../../components/seat';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { movies, Movie } from '../../data/movies';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import styles from './cinemaRoom.module.css';
import { PaymentModal } from '../../components/payModal';

// Tipagem das poltronas
type Seat = {
  id: string;
  status: 'occupied' | 'available' | 'reserved';
  reservationTime?: number; 
};

// Tipagem do ticket
export type Ticket = {
  seatId: string;
  type: 'inteira' | 'meia';
  price: number;
 
};


export function CinemaRoom() {
  const navigate = useNavigate(); 
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
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

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
    setRemainingTime(0)

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
          seat.id === selectedSeat
            ? { ...seat, status: 'reserved', reservationTime: Date.now() }
            : seat
        )
      );

      
      setRemainingTime(10);
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

  const formatDay = (fullDayString:string) => {
    const [dayOfWeek, date] = fullDayString.split(", ");
    
    const shortDate = date.slice(0, 5); 
  
    return `${dayOfWeek}- ${shortDate}`;
  };

  const handleBuyTicket = (tickets:Ticket[]) =>{

    if(tickets.length !== 0){
      setShowPaymentModal(true);
    }
   
    setRemainingTime(10)
  }

  const handleCancelPayment = () => {
    handleExpiredSeats();
    setTickets([]);
    setShowPaymentModal(false);
    setRemainingTime(0)
  };
  

  const handleExpiredSeats = () => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        tickets.some((ticket) => ticket.seatId === seat.id)
          ? { ...seat, status: 'available' } 
          : seat
      )
    );
  
    setTickets([]); 
  };

  useEffect(() => {
    if(paymentCompleted){
      handleOccupiedSeats()
      return
    }

    if (remainingTime <= 0) {
      handleExpiredSeats()
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1); 
    }, 1000); 

    return () => clearInterval(interval); 
  }, [remainingTime, paymentCompleted]);
  

  const handlePaymentCompletion = () => {
    setPaymentCompleted(true); 
    setShowPaymentModal(false);
    navigate('/');
   
  };

  const handleOccupiedSeats = () => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        tickets.some((ticket) => ticket.seatId === seat.id)
          ? { ...seat, status: 'occupied' } 
          : seat
      )
    );
  
    setTickets([]); 
  };
  

  return (

    <>
      <div className={styles.roomHeader} >
        <Link to="/" className={styles.linkBack}>  <FaRegArrowAltCircleLeft size={30} />Voltar</Link>
        <h1>
          
          <svg width="34" height="24" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.7143 9.1C35.0553 9.1 35.3823 8.96304 35.6234 8.71924C35.8645 8.47544 36 8.14478 36 7.8V2.6C36 1.91044 35.7291 1.24912 35.2468 0.761522C34.7646 0.273928 34.1106 0 33.4286 0H2.57143C1.88944 0 1.23539 0.273928 0.753154 0.761522C0.270917 1.24912 0 1.91044 0 2.6V7.8C0 8.14478 0.135459 8.47544 0.376577 8.71924C0.617695 8.96304 0.944722 9.1 1.28571 9.1C2.30869 9.1 3.28977 9.51089 4.01313 10.2423C4.73648 10.9737 5.14286 11.9657 5.14286 13C5.14286 14.0343 4.73648 15.0263 4.01313 15.7577C3.28977 16.4891 2.30869 16.9 1.28571 16.9C0.944722 16.9 0.617695 17.037 0.376577 17.2808C0.135459 17.5246 0 17.8552 0 18.2V23.4C0 24.0896 0.270917 24.7509 0.753154 25.2385C1.23539 25.7261 1.88944 26 2.57143 26H33.4286C34.1106 26 34.7646 25.7261 35.2468 25.2385C35.7291 24.7509 36 24.0896 36 23.4V18.2C36 17.8552 35.8645 17.5246 35.6234 17.2808C35.3823 17.037 35.0553 16.9 34.7143 16.9C33.6913 16.9 32.7102 16.4891 31.9869 15.7577C31.2635 15.0263 30.8571 14.0343 30.8571 13C30.8571 11.9657 31.2635 10.9737 31.9869 10.2423C32.7102 9.51089 33.6913 9.1 34.7143 9.1ZM2.57143 19.37C4.02466 19.0716 5.33118 18.2745 6.26963 17.1135C7.20807 15.9526 7.72073 14.4994 7.72073 13C7.72073 11.5006 7.20807 10.0474 6.26963 8.88646C5.33118 7.72555 4.02466 6.92837 2.57143 6.63V2.6H11.5714V23.4H2.57143V19.37ZM33.4286 19.37V23.4H14.1429V2.6H33.4286V6.63C31.9753 6.92837 30.6688 7.72555 29.7304 8.88646C28.7919 10.0474 28.2793 11.5006 28.2793 13C28.2793 14.4994 28.7919 15.9526 29.7304 17.1135C30.6688 18.2745 31.9753 19.0716 33.4286 19.37Z" fill="#F5B324"/>
          </svg>

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

        {showPaymentModal &&(
          <PaymentModal 
            handleCancelPayment ={handleCancelPayment} 
            tickets={tickets} 
            time={remainingTime} 
            totalToPay={totalToPay} 
            handlePaymentCompletion={handlePaymentCompletion}
          />
        )}
        
    
      </div>
    </>
  );
}
