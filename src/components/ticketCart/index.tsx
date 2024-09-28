
import { BiTrash } from 'react-icons/bi';
import styles from './ticketCart.module.css' ;

type Ticket = {
    seatId: string;
    type: 'inteira' | 'meia';
    price: number;
  };
  
  type TicketCartProps = {
    tickets: Ticket[];
  };



  export const TicketCart = ({ tickets }: TicketCartProps) => {
     
    

    function handleRemoveTicket(id:string){
        
        alert(id)
    }
   
    return (
      <div className={styles.containerTicketCart}>
        <h3>Ingressos Selecionados</h3>
        <ul>
          {tickets.map((ticket, index) => (
            <li key={ticket.seatId}>
              <p>Assento: <strong>{ticket.seatId} </strong></p>
              <p>Tipo: <strong>{ticket.type}</strong>  R$ {ticket.price.toFixed(2)}</p>
              <button onClick={() => handleRemoveTicket(ticket.seatId) }>
                 <BiTrash size={20}/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };