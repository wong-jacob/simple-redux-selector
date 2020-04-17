import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from "./Item";
import { fetchState } from "../actions/fetchState";

export default function DisplayItems(props) {

    const {items, selections} = useSelector(state => state);
    const dispatch = useDispatch();

    const initialise = async () => {
        await fetchState(dispatch);
    };

    useEffect(() => {
        initialise();
    }, []);

    // Cannot have if-else in JSX
    if (!items) {
        return (
        <div>
        <p>No Items to display</p>
        </div>
        )
    } else {
        return (
        <div>
            <p>Display items</p>
            <table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Weight (kg)</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <Item
                    key={item.id}
                    item={item}
                    selections={selections}
                    />
                ))}
            </tbody>
            </table>
        </div>
        );
    }
}