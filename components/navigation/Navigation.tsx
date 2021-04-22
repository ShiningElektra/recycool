import { useState } from "react";
import Burger from "../burger/Burger";
import Menu from "../menu/Menu";

// eslint-disable-next-line react/prop-types
export default function Navigation({ onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger open={!open} handleClick={() => setOpen(!open)} />
      <Menu open={open} onClick={onClick} />
    </div>
  );
}
