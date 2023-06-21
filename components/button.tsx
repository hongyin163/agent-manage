import Loading from "./loading";
import { Button } from "./ui/button";

import React, { useState } from "react";

export default function But({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const onBtnClick = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };
  return (
    <Button onClick={onBtnClick} {...props}>
      {loading && <Loading />}
      {children}
    </Button>
  );
}
