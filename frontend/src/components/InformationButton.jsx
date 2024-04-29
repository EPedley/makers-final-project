import components from "../data/ComponentList";
import { useState } from 'react';

export const InformationButton = ({ componentFilter }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const information = components.find((comp) => comp.value === componentFilter)

  const handleMouseEnter = (event) => {
    var tooltipHeight = 200;
    if (componentFilter === "nh3" || componentFilter === "no") {
        tooltipHeight = 120;
    }
    const newY = event.clientY - tooltipHeight - 10;
    setIsHovered(true);
    setTooltipPosition({ x: event.clientX + 10, y: newY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ border: 'none', background: 'none', cursor: 'pointer' }}
    >
      <sup>ⓘ</sup>
      {isHovered && (
        <div
          style={{
            position: 'fixed',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'lightgray',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.3)',
          }}
        >
            <strong>{information.name}</strong>
            {information.description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
      )}
    </button>
  );
};
