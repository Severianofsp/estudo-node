import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();

console.log();

order.rejectPayment(); // Daqui não altera mais o estado
order.approvePayment(); // Não muda
order.waitPayment(); // Não muda
order.shipOrder();
