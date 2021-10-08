import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

const NextMonthFunction: FC = () => {
    const { incrementMonth } = useBooksDate();
    return (
        <div>
            <button onClick={ incrementMonth }>
                &gt;
            </button>
        </div>
    );
};

export default NextMonthFunction;