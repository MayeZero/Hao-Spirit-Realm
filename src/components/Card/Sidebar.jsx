export default function Sidebar({ items, activeIndex, setActive }) {
  return (
    <div className="sidebar-card" style={{ position: "sticky", top: "36px" }}>
      <h4 className="sidebar-title">ON THIS PAGE</h4>
      <div className="sidebar-list">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`sidebar-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
