import Card from './Card';

let cards = [
  {
    newTrip: true, allYearTrip: false, imageLink: '/img1.png',
    journeyTime: '2 часа',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    price: '900',
    paymentOnBoard: true,
    priceOnBoard: '1200'
  },
  {
    newTrip: false, allYearTrip: true, imageLink: '/img2.png',
    journeyTime: '2 часа',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    price: '900',
    paymentOnBoard: true,
    priceOnBoard: '1200'
  },
  {
    newTrip: false, allYearTrip: false, imageLink: '/img3.png',
    journeyTime: '2 часа',
    title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
    ticketIsValid: 'Билет на целый день',
    tripsNumber: 'Неограниченное число катаний',
    stopsNumber: '6 остановок у главных достопримечательностей',
    startTime: 'Ближайший рейс сегодня',
    startTimeArray: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
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
            newTrip={card.newTrip}
            allYearTrip={card.allYearTrip}
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
