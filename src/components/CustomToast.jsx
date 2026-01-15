import React, { Children } from "react";
import Modal_delete_toast from "./Modal_delete_toast";
import DeleteSuccess from "./DeleteSuccess";

export default function CustomToast() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-9999 backdrop-blur-sm inset-1 flex items-center justify-center">
      <Modal_delete_toast />
      <DeleteSuccess />
    </div>
  );
}
