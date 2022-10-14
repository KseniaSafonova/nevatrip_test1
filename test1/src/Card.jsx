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
            <div className={style.description}>
                <div className={style.title}>{title}</div>
                <div className={style.clock}><img src={clock} alt="" className={style.clockImg} /><div>{journeyTime}</div></div>
                <div className={style.list}><div><img src={item} alt="*" /></div><div>{ticketIsValid}</div></div>
                <div className={style.list}><div><img src={item} alt="*" /></div><div>{tripsNumber}</div></div>
                <div className={style.list}><div><img src={item} alt="*" /></div><div>{stopsNumber}</div></div>
                <div className={style.list}>
                    <div><img src={item} alt="*" /></div>
                    <div className={style.startTimes}>
                        <div>{startTime}</div>
                        <div>
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
                        </div>

                    </div>
                    <div>
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
        </div >
    )
}