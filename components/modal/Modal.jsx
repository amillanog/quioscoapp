import s from "./styleModal.module.css";

const Modal = (props) => {
  const { isOpen, closetModal, children, title, className } = props;

  return (
    <>
      <div className={`${s.mainModal} ${isOpen && s.modalOpen}`}>
        <div className={s.modalConten}>
          <div className={s.modalHeader}>
            <p className={s.title}>{title}</p>
            <div className="cursor-pointer" onClick={closetModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
