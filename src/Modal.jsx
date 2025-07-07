import "./Modal.css";

export function Modal({ children, show, onClose }) {
  if (!show) return null;

  return (
    <>
      {/* Backdrop with Bootstrap class + your custom style */}
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
        onClick={onClose}
      ></div>

      {/* Modal container — keep your positioning but add Bootstrap classes */}
      <section
        className="modal-main modal-dialog modal-dialog-centered modal-lg p-4 bg-white rounded shadow"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1060,
          maxHeight: "90vh",
          overflowY: "auto",
          width: "80%",
          boxSizing: "border-box",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Your modal content */}
        {children}

        {/* Close button - keep your existing style and click */}
        <button
          className="close position-absolute"
          type="button"
          onClick={onClose}
          style={{ fontSize: "2em", top: "0.2em", right: "0.5em", background: "none", border: "none" }}
          aria-label="Close"
        >
          &#x2715;
        </button>
      </section>
    </>
  );
}
