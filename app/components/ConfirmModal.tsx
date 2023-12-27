import { ButtonType } from "@/types";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

type ConfirmModalProps = {
  title: string;
  onClose: () => void;
  text: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({
  title,
  onClose,
  text,
  confirmBtnText,
  cancelBtnText,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Modal title={title} onClose={onClose}>
      <p className="mb-6">{text}</p>

      <div className="flex items-center justify-center gap-6">
        <Button
          text={cancelBtnText || "No"}
          onClick={onCancel}
          variant={ButtonType.secondary}
          className="w-20 min-w-max"
        />
        <Button
          text={confirmBtnText || "Yes"}
          onClick={onConfirm}
          variant={ButtonType.primary}
          className="w-20 min-w-max"
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
