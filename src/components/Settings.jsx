import { SketchPicker } from "react-color";
import { useState, useEffect } from "react";

const Settings = () => {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const storedColor = localStorage.getItem("backgroundColor");
    if (storedColor) {
      setColor(storedColor);
      document.body.style.backgroundColor = storedColor;
    }
  }, []);

  const handleChange = (newColor) => {
    const colorValue = newColor.hex;
    setColor(colorValue);
    document.body.style.backgroundColor = colorValue;
    localStorage.setItem("backgroundColor", colorValue);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-145px)]">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <SketchPicker
            color={color}
            onChange={handleChange}
            className="transform scale-150"
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
