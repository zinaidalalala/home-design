function Button({ text, name }) {
  return (
    <button className={`btn ${name}__btn`}>
      {text}
      <svg
        className="btn-svg hero__svg"
        width="17.152344"
        height="16.005859"
        viewBox="0 0 17.1523 16.0059"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="1"
          d="M1 7.93L14.73 7.8M9.62 1.41L16.15 7.93L9.49 14.59"
          stroke="#CDA274"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Button;
