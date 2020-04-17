import React from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {updateSelection} from "../actions/updateSelection"

export default function Item(props) {
  const selections = useSelector(state => state.selections);
  const dispatch = useDispatch();
  var {item} = props;
  
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.unit}</td>
      <td>
        <input
          type="text"
          name="weight"
          placeholder="purchase weight"
          value={selections
            .filter((select) => select.id === item.id)
            .map((select) => select.weight)}
          onChange={(e) => dispatch(updateSelection(item.id, e.target.value))}
        />
      </td>
    </tr>
  );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}