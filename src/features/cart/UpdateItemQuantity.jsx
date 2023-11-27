import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  function handleIncrementItemQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrementItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
