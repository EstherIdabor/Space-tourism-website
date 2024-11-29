export default function NumberIndicator({
  techName,
  index,
  onChangeTechnology,
  isActive,
}) {
  return (
    <button
      role="tab"
      className={`bg-dark ${isActive ? "active" : ""}`}
      aria-selected={isActive}
      onClick={() => onChangeTechnology(index)}
    >
      <span className="sr-only">{techName}</span>
      {index + 1}
    </button>
  );
}
