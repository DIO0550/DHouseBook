import React from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

import dateControlStyle from '../../style/date_control.module.scss';

const DateComponent: React.VFC = () => {
    const { dateStr } = useBooksDate();
    const date = new Date(dateStr);
    return (
        <div className={dateControlStyle['date-block']}>
            { date.getFullYear() }年{ date.getMonth() + 1 }月
        </div>
    );
}

export default DateComponent;