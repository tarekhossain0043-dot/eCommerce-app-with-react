import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Order() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  useEffect(() => {
    setHeaderTitle("All Orders");
    setHeaderBtns(
      <button onClick={() => alert("Adding Product...")}>+ Add Product</button>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns]);
  return <div>Order</div>;
}
