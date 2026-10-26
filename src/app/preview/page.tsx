export default function Preview() {
  return (
    <div style={{ width: "100%", height: "700vh", overflow: "hidden", background: "#07111f" }}>
      <iframe
        src="/"
        title="Desktop preview"
        style={{
          width: 1600,
          height: 2240,
          border: 0,
          transform: "scale(0.4)",
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
