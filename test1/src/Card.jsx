import style from './Card.module.css';
import Button from './Button';
import item from './images/item.svg';
import clock from './images/clock.svg';
import rubL from './images/rubL.svg';
import rubS from './images/rubS.svg'
import { useState } from 'react';

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

    const [hideTimesArray, showHiddenTimes] = useState(true);

    const showAllTimes = () => {
        showHiddenTimes(!hideTimesArray)
    }

    return (
        <div className={style.card}>
            {
                newTrip ?
                    <div>
                        <div className={style.newTrip}>НОВИНКА</div>
                        <img src={imageLink} />
                    </div>
                    :
                    allYearTrip ?
                        <div>
                            <div className={style.allYearTrip}>КРУГЛЫЙ ГОД</div>
                            <img src={imageLink} />
                        </div>
                        :
                        <div><img src={imageLink} /></div>
            }
            <div className={style.description}>
                <div className={style.title}>{title}</div>
                <div className={style.clock}><img src={clock} alt="" /><div>{journeyTime}</div></div>
                <div><img src={item} alt="*" />{ticketIsValid}</div>
                <div><img src={item} alt="*" />{tripsNumber}</div>
                <div><img src={item} alt="*" />{stopsNumber}</div>
                <div><img src={item} alt="*" />{startTime}
                    {
                        startTimeArray.map((time) =>
                            (0 < time - new Date().getHours() && time - new Date().getHours() < 4)
                                ?
                                <>
                                    <span className={style.startTimeArray}>{time}:00</span>
                                </>
                                :
                                <></>)
                    }
                    <button className={style.buttonMore} onClick={showAllTimes}>ещё...</button>
                    {
                        hideTimesArray ?
                            <></>
                            :
                            <div>
                                {
                                    startTimeArray.map((time) =>
                                        (time - new Date().getHours() >= 4)
                                            ?
                                            <>
                                                <span className={style.startTimeArray}>{time}:00</span>
                                            </>
                                            :
                                            <></>)
                                }
                            </div>
                    }
                </div>
                <div className={style.bottomBlock}>
                    {
                        paymentOnBoard ?
                            <div>
                                <div className={style.price}>{price}<img src={rubL}></img></div>
                                <div className={style.priceOnBoard}>{priceOnBoard}<img src={rubS}></img><div>на причале</div></div>
                            </div>
                            :
                            <div className={style.priceOnCenter}>{price}<img src={rubL}></img></div>
                    }
                    <Button />
                </div>
            </div>
        </div>
    )
}