import { useState } from "react";
import styles from "../../styles/Menu.module.css";

export default function ElementMenu() {
  const [selected, setSelected] = useState("Button");

  const elements = ["Button", "Card", "Input", "Modal", "Navbar"];

  return (
    <div className={styles.menu}>
      <h2>Choose Element</h2>

      {elements.map((element) => (
        <button
          key={element}
          onClick={() => setSelected(element)}
        >
          {element}
        </button>
      ))}
      <p>
        Selected: <span>{selected}</span>
      </p>
      <h3><a href="/catalog">Back to catalog</a></h3>
    </div>
  );
}



