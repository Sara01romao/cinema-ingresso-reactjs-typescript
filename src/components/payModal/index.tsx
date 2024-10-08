import { useEffect, useState } from 'react';
import styles from './payModal.module.css';

export type Ticket = {
  seatId: string;
  type: 'inteira' | 'meia';
  price: number;
  movieName?: string;
  movieTime?: string;
  movieRoom?: string;
  dayOfWeek?: string;
  selectedDate?: string;
  selectedTimeBuy?: string;
  selectedTime?: string;
};

interface PayProps {
  tickets: Ticket[];
  handleCancelPayment : () => void;
  time:number;
  totalToPay:number;
  
}

export function PaymentModal({ handleCancelPayment , tickets, time, totalToPay}: PayProps) {
  const [remainingTimePayment, setRemainingTimePayment] = useState(time * 60); // 5 minutos em segundos
  
  useEffect(() => {
    if (remainingTimePayment <= 0) {
       
      return;
    }

    const interval = setInterval(() => {
      setRemainingTimePayment((prevTime) => prevTime - 1); 
    }, 1000); 

    return () => clearInterval(interval); 
  }, [remainingTimePayment]);

  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className={styles.payModalContainer}>
      <div className={styles.payModal}>
        
        <h2 className={styles.titlePaymentModal}>
          Finalizar Pagamento
        </h2>
        <p className={styles.timePaymentModal}>Tempo Restante: <strong>{formatTime(remainingTimePayment)}</strong></p>
        
        {tickets.length > 0 && (
          <div className={styles.infoMoviePaymentModal} >
            
            <div>
              <p><strong>Filme:</strong> {tickets[0].movieName}</p>
              <p><strong>Horário:</strong> {tickets[0].movieTime}</p>
            </div>

           
            <div>
              <p><strong>Sala:</strong> {tickets[0].movieRoom}</p>
              <p><strong>Data:</strong> {tickets[0].dayOfWeek}</p>
              <p><strong>Horário Filme:</strong> {tickets[0].selectedTime}</p>
            </div>
          </div>
        )}
        <div>
          <h4 className={styles.titleInfoTickets}>Informações Ingressos</h4>
          <table className={styles.tableTickets}>
            <thead>
              <tr>
                <th>Poltrona</th>
                <th>Ingresso</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.seatId}>
                  <td>{ticket.seatId}</td>
                  <td>{ticket.type === 'inteira' ? 'Inteira' : 'Meia'}</td>
                  <td>{ticket.price.toLocaleString("pt-BR",{
                        style: "currency",
                        currency: "BRL"
                    })}
                 </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h2 className={styles.totalPaymentModal} >
              Total a pagar: <span>{totalToPay.toLocaleString("pt-BR",{
                  style: "currency",
                  currency: "BRL"
              })}</span>
          </h2>

        </div>

        <div className={styles.qrContainer}>
          <p>PIX</p>
          <img className={styles.qrCodeImg} src="https://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt="" />
        </div>
        
        <button className={styles.btnCancelPayment} onClick={handleCancelPayment }>Cancelar</button>
      </div>
    </div>
  );
}
