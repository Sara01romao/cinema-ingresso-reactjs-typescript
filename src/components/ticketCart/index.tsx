
type Ticket = {
    seatId: string;
    type: 'inteira' | 'meia';
    price: number;
  };
  
  type TicketCartProps = {
    tickets: Ticket[];
  };



  export const TicketCart = ({ tickets }: TicketCartProps) => {
    return (
      <div>
        <h3>Ingressos Selecionados:</h3>
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              Assento: {ticket.seatId} - {ticket.type} - R$ {ticket.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  };