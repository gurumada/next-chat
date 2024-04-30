"use client";

import { useRegisterModal } from "@/hooks/useRegisterModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>登録用モーダル（仮）</DialogContent>
    </Dialog>
  );
};
