import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Menus = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = () => {};

  return (
    <Menu inverted>
      <Menu.Item
        name="editorials"
        active={activeItem === "editorials"}
        content="Editorials"
        onClick={handleItemClick}
      />

      <Menu.Item
        name="reviews"
        active={activeItem === "reviews"}
        content="Reviews"
        onClick={handleItemClick}
      />

      <Menu.Item
        name="upcomingEvents"
        active={activeItem === "upcomingEvents"}
        content="Upcoming Events"
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default Menus;
