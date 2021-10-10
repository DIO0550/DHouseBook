import React from "react";
import BackMonthComponent from "../Atoms/BackMonthComponent";
import DateComponent from "../Atoms/DateComponent";
import NextMonthComponent from "../Atoms/NextMonthComponent";

import dateControlStyle from "../../style/date_control.module.scss"

const DateControlComponent: React.VFC = () => {
    return (
        <div className={dateControlStyle['date-control-block']}>
            <BackMonthComponent />
            <DateComponent />
            <NextMonthComponent />
        </div>
    );
}

export default DateControlComponent;