import React from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

import dateControlStyle from '../../style/date_control.module.scss';

const NextMonthComponent: React.VFC = () => {
    const { incrementMonth } = useBooksDate();
    return (
        <div className={dateControlStyle['date-button-block']}>
            <button className={dateControlStyle['date-button']} onClick={ incrementMonth }>
                &gt;
            </button>
        </div>
    );
}

export default NextMonthComponent;