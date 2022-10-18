import style from './Card.module.css';
import item from './images/item.svg';
import clock from './images/clock.svg';
import { useState } from 'react';

export default function Description(props) {
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
        <div className={style.description}>
            <div className={style.clock}>
                <img src={clock} alt="" className={style.clockImg} />
                <div>{journeyTime}</div>
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.list}>
                <div className={style.listItem}>
                    <div><img src={item} alt="*" /></div>
                    <div>{ticketIsValid}</div>
                </div>
                <div className={style.listItem}>
                    <div><img src={item} alt="*" /></div>
                    <div>{tripsNumber}</div>
                </div>
                <div className={style.listItem}>
                    <div><img src={item} alt="*" /></div>
                    <div>{stopsNumber}</div>
                </div>
                <div className={style.listItem}>
                    <div><img src={item} alt="*" /></div>
                    <div className={style.startTimes}>
                        <div>{startTime}</div>
                        <div className={style.startTimesArray}>
                            {
                                startTimeArray.map((time) =>
                                    (0 < time - new Date().getHours() && time - new Date().getHours() < 4)
                                        ?
                                        <>
                                            <div className={style.timesArrayItem}>{time}:00</div>
                                        </>
                                        :
                                        <></>)
                            }
                            <button className={style.buttonMore} onClick={showAllTimes}>ещё...</button>

                            {
                                hideTimesArray ?
                                    <></>
                                    :
                                    <>
                                        {
                                            startTimeArray.map((time) =>
                                                (time - new Date().getHours() >= 4)
                                                    ?
                                                    <>
                                                        <div className={style.timesArrayItem}>{time}:00</div>
                                                    </>
                                                    :
                                                    <></>)
                                        }
                                    </>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}