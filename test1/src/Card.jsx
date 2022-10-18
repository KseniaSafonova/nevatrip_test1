import style from './Card.module.css';
import Button from './Button';
import rubL from './images/rubL.svg';
import rubS from './images/rubS.svg'

import Description from './Description';

export default function Card(props) {
    const {
        newTrip,
        allYearTrip,
        imageLink,
        title,
        journeyTime,
        ticketIsValid,
        tripsNumber,
        stopsNumber,
        startTime,
        startTimeArray,
        price,
        paymentOnBoard,
        priceOnBoard
    } = props;

    return (
        <div className={style.card}>
            {
                newTrip ?
                    <div className={style.cardImg}>
                        <div className={style.newTrip}>НОВИНКА</div>
                        <img src={imageLink} />
                    </div>
                    :
                    allYearTrip ?
                        <div className={style.cardImg}>
                            <div className={style.allYearTrip}>КРУГЛЫЙ ГОД</div>
                            <img src={imageLink} />
                        </div>
                        :
                        <div className={style.cardImg}><img src={imageLink} /></div>
            }
            <Description
                title={title}
                journeyTime={journeyTime}
                ticketIsValid={ticketIsValid}
                tripsNumber={tripsNumber}
                stopsNumber={stopsNumber}
                startTime={startTime}
                startTimeArray={startTimeArray} />

            <div className={style.bottomBlock}>
                {
                    paymentOnBoard ?
                        <div>
                            <div className={style.price}>{price}<img src={rubL}></img></div>
                            <div className={style.priceOnBoard}>{priceOnBoard}<img src={rubS}></img><span> р </span>на причале</div>
                        </div>
                        :
                        <div className={style.priceOnCenter}>{price}<img src={rubL}></img></div>
                }
                <Button />
            </div>
        </div >
    )
}