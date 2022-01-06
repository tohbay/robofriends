const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid white",
        height: "1000px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
