import { v4 as uuidv4 } from "uuid";
import { FC } from "react";
import usePurchasedItemList from "../../CustomHook/usePurchasedItemList";
import { PurchasedItem } from "../../store/PurchasedItemListSlice";

const PurchasedListFunction: FC = () => {
    const {purchasedItemList, purchasedItemAdded, purchasedItemSetAll } = usePurchasedItemList();

    function tableRender() {
        var list = [];
        for (var ids of purchasedItemList.ids) {
            var item: PurchasedItem | undefined = purchasedItemList.entities[ids];
            let isNull = item == undefined || item == null;
            list.push(
                <tr key={ids}>
                    <td>{ !isNull ? item!.name : "" }</td>
                    <td>{ !isNull ? item!.price : "" }</td>
                    <td>{ !isNull ? item!.type : "" }</td>
                    <td>{ !isNull ? item!.purchasedDate : "" }</td>
                </tr>
            )
        }
        return list;
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>値段</th>
                        <th>種類</th>
                        <th>購入日</th>
                    </tr>
                </thead>
                <tbody>
                    { tableRender() }
                </tbody>
            </table>
            <button type="button" onClick={() => purchasedItemAdded({
                id: uuidv4(),
                name: "サンプル",
                price: 12345,
                type: "テスト",
                purchasedDate: "テスト"
            })}>新規追加</button>
        </div>
    )
}

export default PurchasedListFunction;