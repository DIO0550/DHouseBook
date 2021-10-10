import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

import dateControlStyle from '../../style/date_control.module.scss';

const BookDateFunction: FC = () => {
    const { dateStr } = useBooksDate();
    const date = new Date(dateStr);
    return (
        <div className={dateControlStyle['date-block']}>
            { date.getFullYear() }年{ date.getMonth() + 1 }月
        </div>
    );
};

export default BookDateFunction;
