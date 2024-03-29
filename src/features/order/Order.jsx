// Test ID: IIDSAT
import { useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";

import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import Button from "../../ui/Button";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  const [isCopied, setIsCopied] = useState(false);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
    customer,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(id.toString());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  }

  return (
    <div className=" space-y-6 px-5 py-4 sm:space-y-4 ">
      <div className="flex flex-wrap items-baseline justify-between gap-2 sm:space-x-6">
        <h2 className="text-xl font-semibold">Order # {id}</h2>
        <Button
          onClick={handleCopyToClipboard}
          type={!isCopied ? "small" : "disabled"}
          disabled={isCopied}
        >
          {isCopied ? "Copied" : "Copy Order"}
        </Button>
        <div className="mt-3 space-x-2 ">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50 ">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50 ">
            {status} order
          </span>
        </div>
      </div>

      <h3 className="text-l font-medium">
        <span className="font-semibold">Customer</span> {customer}
      </h3>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5 ">
        <p className="text-sm font-medium text-stone-600 ">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600 ">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold ">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
