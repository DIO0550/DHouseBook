import { useSelector, useDispatch } from "react-redux";
import { States } from "../store/store";
import { bookDateSlice, BookDateState } from "../store/bookDateSlice";

const useBooksDate = () => {
    const dispatch = useDispatch();
    const { bookDate } = useSelector<
        States,
        { bookDate: BookDateState }
    >((state) => ({
        bookDate: state.bookDate
    }));
    const { incrementMonth, decrementMonth } = bookDateSlice.actions;
    return {
        date: bookDate.date,
        incrementMonth: () => dispatch(incrementMonth),
        decrementMonth: () => dispatch(decrementMonth)
    }
};

export default useBooksDate;