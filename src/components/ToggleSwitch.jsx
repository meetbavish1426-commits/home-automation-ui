function ToggleSwitch({ isOn, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleSwitch;
