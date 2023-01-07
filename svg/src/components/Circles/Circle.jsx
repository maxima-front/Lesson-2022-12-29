const Circle = ({ x, y, radius, fill }) => (
  <svg height={Math.max(100, y, radius*2)} width={Math.max(100, x, radius*2)}>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
)

export default Circle