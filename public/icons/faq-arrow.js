const FaqArrowIcon = props => {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 1.5L8.5 8.5L1.5 15.5"
        stroke={props?.color || '#A3A3A3'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FaqArrowIcon;
