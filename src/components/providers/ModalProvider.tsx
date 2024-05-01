"use client";

import React, { useEffect, useState } from "react";

import { RegisterModal } from "@/components/modals/RegisterModal";

export const ModalProvider = () => {
  const [isMounded, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMounded) return null;

  return (
    <>
      <RegisterModal />
    </>
  );
};
