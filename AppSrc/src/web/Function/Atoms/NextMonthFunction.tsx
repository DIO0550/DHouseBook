import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

import dateControlStyle from '../../style/date_control.module.scss';

const NextMonthFunction: FC = () => {
    const { incrementMonth } = useBooksDate();
    return (
        <div className={dateControlStyle['date-button-block']}>
            <button className={dateControlStyle['date-button']} onClick={ incrementMonth }>
                &gt;
            </button>
        </div>
    );
};

export default NextMonthFunction;