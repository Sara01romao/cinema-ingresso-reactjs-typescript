import { BiTrash } from 'react-icons/bi';
import styles from './ticketCart.module.css' ;
import { TbCalendarClock } from 'react-icons/tb';
import { IoIosArrowDropupCircle } from 'react-icons/io';


type Ticket = {
    seatId: string;
    type: 'inteira' | 'meia';
    price: number;
  };
  
  type TicketCartProps = {
    tickets: Ticket[];
    total: number;
    movie: string;
    movieTime:string | null;
    dayOfWeek:string | null;
    onRemoveTicket: (seatId: string) => void;
    handleBuyTicket: (tickets:Ticket[]) => void;
    handleOpenCart: () => void;
    mobileCart:boolean;
  };

  export const TicketCart = ({ movie, movieTime, dayOfWeek, tickets, total, onRemoveTicket, handleBuyTicket,  handleOpenCart, mobileCart }: TicketCartProps) => {
   
    return (
      <div className={`${styles.containerTicketCart} ${!mobileCart ? styles.activeMobile : ''} `}>
        <h3 className={styles.active}> 
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="4" fill="#FFCE00"/>
            <path d="M23.25 12.25C23.4489 12.25 23.6397 12.171 23.7803 12.0303C23.921 11.8897 24 11.6989 24 11.5V8.5C24 8.10218 23.842 7.72064 23.5607 7.43934C23.2794 7.15804 22.8978 7 22.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V11.5C3 11.6989 3.07902 11.8897 3.21967 12.0303C3.36032 12.171 3.55109 12.25 3.75 12.25C4.34674 12.25 4.91903 12.4871 5.34099 12.909C5.76295 13.331 6 13.9033 6 14.5C6 15.0967 5.76295 15.669 5.34099 16.091C4.91903 16.5129 4.34674 16.75 3.75 16.75C3.55109 16.75 3.36032 16.829 3.21967 16.9697C3.07902 17.1103 3 17.3011 3 17.5V20.5C3 20.8978 3.15804 21.2794 3.43934 21.5607C3.72064 21.842 4.10218 22 4.5 22H22.5C22.8978 22 23.2794 21.842 23.5607 21.5607C23.842 21.2794 24 20.8978 24 20.5V17.5C24 17.3011 23.921 17.1103 23.7803 16.9697C23.6397 16.829 23.4489 16.75 23.25 16.75C22.6533 16.75 22.081 16.5129 21.659 16.091C21.2371 15.669 21 15.0967 21 14.5C21 13.9033 21.2371 13.331 21.659 12.909C22.081 12.4871 22.6533 12.25 23.25 12.25ZM4.5 18.175C5.34772 18.0029 6.10986 17.543 6.65728 16.8732C7.20471 16.2034 7.50376 15.365 7.50376 14.5C7.50376 13.635 7.20471 12.7966 6.65728 12.1268C6.10986 11.457 5.34772 10.9971 4.5 10.825V8.5H9.75V20.5H4.5V18.175ZM22.5 18.175V20.5H11.25V8.5H22.5V10.825C21.6523 10.9971 20.8901 11.457 20.3427 12.1268C19.7953 12.7966 19.4962 13.635 19.4962 14.5C19.4962 15.365 19.7953 16.2034 20.3427 16.8732C20.8901 17.543 21.6523 18.0029 22.5 18.175Z" fill="black"/>
          </svg>

          Ingressos 
          {tickets.length >=1 && (<span>{tickets.length}</span>)}
          
          <button onClick={ handleOpenCart} className={`${styles.openTicketCart} ${!mobileCart ? styles.arrowCart :''}`}><IoIosArrowDropupCircle  size={30}/></button>
        </h3>

        <div className={`${styles.buyTicketInfo} ${mobileCart ? styles.activeMobile : ''}`}>
          <div className={styles.ticketsInfoTicketCart}>
            <p><strong>{movie}</strong></p>
            <p><TbCalendarClock/>{dayOfWeek} : {movieTime}h</p>
            
          </div>
          <ul>
            {tickets.length >= 1 ?  
              tickets.map((ticket) => (
                <li key={ticket.seatId}>
                  <p className={styles.seatTicket}>Assento: <strong>{ticket.seatId} </strong></p>
                  <p className={styles.typeTicket}>{ticket.type}  <strong> R$ {ticket.price.toFixed(2)} </strong></p>
                  <button className={styles.removeTicket} onClick={() => onRemoveTicket(ticket.seatId)}>
                    <BiTrash size={20}/>
                  </button>
                </li>
              )): <li className={styles.noTickets}>
                
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                  <path d="M23.25 12.25C23.4489 12.25 23.6397 12.171 23.7803 12.0303C23.921 11.8897 24 11.6989 24 11.5V8.5C24 8.10218 23.842 7.72064 23.5607 7.43934C23.2794 7.15804 22.8978 7 22.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V11.5C3 11.6989 3.07902 11.8897 3.21967 12.0303C3.36032 12.171 3.55109 12.25 3.75 12.25C4.34674 12.25 4.91903 12.4871 5.34099 12.909C5.76295 13.331 6 13.9033 6 14.5C6 15.0967 5.76295 15.669 5.34099 16.091C4.91903 16.5129 4.34674 16.75 3.75 16.75C3.55109 16.75 3.36032 16.829 3.21967 16.9697C3.07902 17.1103 3 17.3011 3 17.5V20.5C3 20.8978 3.15804 21.2794 3.43934 21.5607C3.72064 21.842 4.10218 22 4.5 22H22.5C22.8978 22 23.2794 21.842 23.5607 21.5607C23.842 21.2794 24 20.8978 24 20.5V17.5C24 17.3011 23.921 17.1103 23.7803 16.9697C23.6397 16.829 23.4489 16.75 23.25 16.75C22.6533 16.75 22.081 16.5129 21.659 16.091C21.2371 15.669 21 15.0967 21 14.5C21 13.9033 21.2371 13.331 21.659 12.909C22.081 12.4871 22.6533 12.25 23.25 12.25ZM4.5 18.175C5.34772 18.0029 6.10986 17.543 6.65728 16.8732C7.20471 16.2034 7.50376 15.365 7.50376 14.5C7.50376 13.635 7.20471 12.7966 6.65728 12.1268C6.10986 11.457 5.34772 10.9971 4.5 10.825V8.5H9.75V20.5H4.5V18.175ZM22.5 18.175V20.5H11.25V8.5H22.5V10.825C21.6523 10.9971 20.8901 11.457 20.3427 12.1268C19.7953 12.7966 19.4962 13.635 19.4962 14.5C19.4962 15.365 19.7953 16.2034 20.3427 16.8732C20.8901 17.543 21.6523 18.0029 22.5 18.175Z" fill="#f0f0f0"/>
                </svg>
                Escolha uma poltrona</li>

            }
          </ul>

          <div>
            <h4 className={styles.totalCart}>Total R$ {total.toFixed(2)}</h4>
          </div>
          
          <button onClick={() => handleBuyTicket(tickets)} className={styles.buyTicket}>Finalizar Compra</button>
        </div>
        
       
      </div>
    );
  };