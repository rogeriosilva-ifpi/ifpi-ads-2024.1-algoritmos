import { question } from 'readline-sync';

function calculateRoomPrice(guests) {
  const basePrice = 200;
  const priceIncrement = 80;
  return Math.min(basePrice + (guests - 1) * priceIncrement, 440);
}

function main() {
  let totalGuests = 0;
  let rooms = [];
  let currentRoom = [];

  while (true) {
    const input = question("Digite a idade do hóspede (0 para novo quarto, 00 para encerrar): ");

    if (input === '00') {
      // Dois zeros consecutivos, encerramos o programa
      break;
    }

    if (input === '0') {
      // Um zero, finalizamos o quarto atual e começamos um novo
      if (currentRoom.length > 0) {
        rooms.push(currentRoom);
        currentRoom = [];
        console.log("Novo quarto iniciado.");
      } else {
        console.log("Quarto atual está vazio. Digite uma idade válida.");
      }
      continue;
    }

    const age = parseInt(input);

    if (age < 18 || age > 100 || isNaN(age)) {
      console.log("Idade inválida. Por favor, digite uma idade entre 18 e 100 anos.");
      continue;
    }

    currentRoom.push(age);
    totalGuests++;

    if (currentRoom.length === 4) {
      rooms.push(currentRoom);
      currentRoom = [];
      console.log("Quarto lotado. Novo quarto iniciado automaticamente.");
    }
  }

  if (currentRoom.length > 0) {
    rooms.push(currentRoom);
  }

  if (rooms.length === 0) {
    console.log("Nenhuma reserva foi feita.");
    return;
  }

  console.log(`\nTotal de quartos reservados: ${rooms.length}`);
  console.log(`Total de hóspedes: ${totalGuests}`);

  let totalDailyPrice = 0;
  rooms.forEach((room, index) => {
    const roomPrice = calculateRoomPrice(room.length);
    totalDailyPrice += roomPrice;
    console.log(`Quarto ${index + 1}: ${room.length} hóspedes, R$ ${roomPrice.toFixed(2)}/dia`);
  });

  const nights = parseInt(question("\nPara quantas noites será a reserva? "));

  const totalPrice = totalDailyPrice * nights;
  console.log(`\nValor total por dia: R$ ${totalDailyPrice.toFixed(2)}`);
  console.log(`Valor total da reserva para ${nights} dias: R$ ${totalPrice.toFixed(2)}`);

  const pixDiscount = totalPrice * 0.05;
  console.log(`\nDesconto de 5% para pagamento via PIX: R$ ${pixDiscount.toFixed(2)}`);
  console.log(`Valor total com desconto PIX: R$ ${(totalPrice - pixDiscount).toFixed(2)}`);

  console.log("\nOpções de pagamento no cartão de crédito:");
  console.log("- Em até 3x sem juros");
  const creditInterest = totalPrice * 0.105;
  console.log(`- De 4x a 12x com juros fixos simples de 10,5%: R$ ${(totalPrice + creditInterest).toFixed(2)}`);
}

main();