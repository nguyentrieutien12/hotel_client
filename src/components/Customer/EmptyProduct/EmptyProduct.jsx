import React from "react";

export default function EmptyProduct({ name }) {
  return (
    <div>
      <h1 className="text-center">
        The hotel does not have {name} services, see you soon
      </h1>
    </div>
  );
}
