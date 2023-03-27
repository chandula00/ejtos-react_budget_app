//import Button from 'react-bootstrap/Button';
//import Dropdown from 'react-bootstrap/Dropdown';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useContext, } from "react";
import { AppContext } from "../context/AppContext";

const CurrencySelector = (props) => {
  const { dispatch} = useContext(AppContext);
  let currencyText = [];
  currencyText["$"] = "$ (Dollar)";
  currencyText["€"] = "€ (Euro)";
  currencyText["£"] = "£ (Pound)";
  currencyText["¥"] = "¥ (Yuan)";

  const onSelect = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
      <button
        class="btn btn-secondary "
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{height:"1.4cm"}}
      >
        Currency
      </button>
      <select
        className="custom-select"
        aria-labelledby="dropdownMenuButton"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option defaultValue><b>Select Currency</b></option>
        <option
          //   active={currency === "$"}
          value="$"
          className="dropdown-item"
        >
          {currencyText["$"]}
        </option>
        <option
          //   active={currency === "€"}
          value="€"
          className="dropdown-item"
        >
          {currencyText["€"]}
        </option>
        <option
          //   active={currency === "£"}
          value="£"
          className="dropdown-item"
        >
          {currencyText["£"]}
        </option>
        <option
          //   active={currency === "¥"}
          value="¥"
          className="dropdown-item"
        >
          {currencyText["¥"]}
        </option>
      </select>
    </div>
  );
};

export default CurrencySelector;
