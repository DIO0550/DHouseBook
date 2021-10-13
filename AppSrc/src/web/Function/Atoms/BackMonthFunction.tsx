import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

import dateControlStyle from '../../style/date_control.module.scss';

const BackMonthFunction: FC = () => {
    const { decrementMonth } = useBooksDate();
    return (
        <div className={dateControlStyle['date-button-block']}>
            <button className={dateControlStyle['date-button']} onClick={ decrementMonth }>
                &lt;
            </button>
        </div>
    );
};

export default BackMonthFunction;