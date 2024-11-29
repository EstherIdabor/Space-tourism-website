export default function TabList({ tabs, activeTab, onChange }) {
  return (
    <div className="tab-list underline-indicators flex" role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          role="tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          aria-selected={activeTab === index}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
