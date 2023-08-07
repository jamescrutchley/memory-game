import { Card } from "./card";
import { Scoreboard } from "./scoreboard";

export function Gameboard() {
  const cardPanel = () => {
    return (
      <ul>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    );
  };

  return (
    <div className="gameboard">
      {cardPanel()}
      <Scoreboard />
    </div>
  );
}
