import React, { useState, useMemo, useEffect } from "react";
// import "./styles.css";

import differenceInSeconds from "date-fns/differenceInSeconds";

const Timer = ({ deadline }) => {
    const ONE_DAY = 60 * 60 * 24;
    const ONE_HOUR = 60 * 60;
    const ONE_MINUTE = 60;
    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    const diffInSeconds = differenceInSeconds(deadline, currentTime);

    const getCoundown = () => {
        if (diffInSeconds <= 1) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
        const days = Math.floor(diffInSeconds / ONE_DAY);
        const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
        const minutes = Math.floor(
            (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
        );
        const seconds =
            diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

    const countdown = useMemo(getCoundown, [currentTime]);

    useEffect(() => {
        setInterval(() => {
            const now = new Date().getTime();
            setCurrentTime(now);
        }, 1000);
    }, []);

    return (
        <div>
            <p className="text-md font-medium">Upcoming Birthday in-</p>
            <div className="flex justify-around mt-2">
                <div className="days">
                    <button className="btn button-shadow">{countdown.days}</button>
                    <h1 className="text-md font-bold">Days</h1>
                </div>
                <div className="hour">
                    <button className="btn button-shadow">{countdown.hours}</button>
                    <h1 className="text-md font-bold">Hours</h1>
                </div>
                <div className="minute">
                    <button className="btn button-shadow">{countdown.minutes}</button>
                    <h1 className="text-md font-bold">Minutes</h1>
                </div>
                <div className="second">
                    <button className="btn button-shadow">{countdown.seconds}</button>
                    <h1 className="text-md font-bold">Seconds</h1>
                </div>
            </div>
        </div>
    );
};

export default function CountDown({ dob }) {
    // console.log(dob);
    const presentYear = new Date().getFullYear();

    const fullDOB = dob?.date.split("T")[0];
    const month = fullDOB?.split("-")[1];
    const day = fullDOB?.split("-")[2];
    const presentMonth = new Date().getMonth() + 1;

    let filteredYear;
    if (presentMonth > parseInt(month)) {
        filteredYear = presentYear + 1;
    } else {
        filteredYear = presentYear;
    }


    // console.log(filteredYear, presentMonth, parseInt(month), parseInt(day));
    return (
        <div>
            <Timer deadline={new Date(filteredYear, parseInt(month), parseInt(day))} />
        </div>
    );
}
