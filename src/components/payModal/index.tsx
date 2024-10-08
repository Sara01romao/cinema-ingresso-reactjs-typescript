import { useEffect, useState } from 'react';
import styles from './payModal.module.css';

export type Ticket = {
  seatId: string;
  type: 'inteira' | 'meia';
  price: number;
};

interface PayProps {
  tickets: Ticket[];
  onClose: (isOpen: boolean) => void;
  time:number;
  
}

export function PaymentModal({ onClose, tickets, time }: PayProps) {
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
        
        <div>
          {tickets.map((item) => (
            <div>
              
              <ul>
                <li><p>{item.price.toLocaleString("pt-BR",{
                    style: "currency",
                    currency: "BRL"
                    })}</p>
                </li>
              </ul>
            </div>
            
            
          ))}
        </div>
        <img className={styles.qrCodeImg} src="https://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt="" />
        <button onClick={() => onClose(false)}>Cancelar</button>
      </div>
    </div>
  );
}
