import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

const BookDateFunction: FC = () => {
    const { dateStr } = useBooksDate();
    const date = new Date(dateStr);
    return (
        <div>
            { date.getFullYear() }年{ date.getMonth() }月
        </div>
    );
};

export default BookDateFunction;
