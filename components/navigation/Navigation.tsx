import { useState } from "react";
import Burger from "../burger/Burger";
import Menu from "../menu/Menu";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger open={!open} handleClick={() => setOpen(!open)} />
      <Menu open={open} />
    </div>
  );
}
