
const GridDot = ({size, index, bg, left, right, bottom, top, color}) => {
  return (
<div
      className={`absolute ${index} ${left} ${right} ${bottom} ${top} h-${size} w-${size} ${bg} [background-size:16px_16px]`}
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`
      }}
    ></div>
  );
};

export default GridDot;
