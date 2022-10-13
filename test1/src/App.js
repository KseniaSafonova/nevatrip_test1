import './App.css';
import Card from './Card';

let cards = [
  {
    new: true, allYear: false, imageLink: '/img1.png',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    journeyTime: '2 часа',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['12:00', '13:00', '14:00', '15:00'],
    price: '900',
    paymentOnBoard: true,
    priceOnBoard: '1200'
  },
  {
    new: false, allYear: true, imageLink: '/img2.png',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    journeyTime: '2 часа',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['12:00', '13:00', '14:00', '15:00'],
    price: '900',
    paymentOnBoard: true,
    priceOnBoard: '1200'
  },
  {
    new: false, allYear: false, imageLink: '/img3.png',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    journeyTime: '2 часа',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['12:00', '13:00', '14:00', '15:00'],
    price: '900',
    paymentOnBoard: false,
    priceOnBoard: '1200'
  }
]

function App() {
  return (
    <div className="App">
      {
        cards.map((card) =>
          <Card
            new={card.new}
            allYear={card.allYear}
            imageLink={require('./images' + card.imageLink)}
            title={card.title}
            journeyTime={card.journeyTime}
            ticketIsValid={card.ticketIsValid}
            tripsNumber={card.tripsNumber}
            stopsNumber={card.stopsNumber}
            startTime={card.startTime}
            startTimeArray={card.startTimeArray}
            price={card.price}
            paymentOnBoard={card.paymentOnBoard}
            priceOnBoard={card.priceOnBoard} >
          </Card>)
      }
    </div >
  );
}

export default App;
