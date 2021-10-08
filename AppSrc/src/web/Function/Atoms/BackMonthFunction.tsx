import { FC } from "react";
import useBooksDate from "../../CustomHook/useBooksDate";

const BackMonthFunction: FC = () => {
    const { decrementMonth } = useBooksDate();
    return (
        <div>
            <button onClick={ decrementMonth }>
                &lt;
            </button>
        </div>
    );
};

export default BackMonthFunction;