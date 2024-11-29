export default function DotIndicator({
  crewrole,
  onChangeCrew,
  index,
  isActive,
}) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => {
        onChangeCrew(index);
      }}
    >
      <span className="sr-only">{crewrole}</span>
    </button>
  );
}
