import MenuItem from "../components/MenuItem";

export default function Menu({ menu, getMenuItemsByFoodType, menuItemsByFoodType }) {

  function loading() {
    return <h1>Loading...</h1>
  };

  const menuItems = ['appetizer', 'special combo tray', 'noodle salad bowl', 'rice plate', 'pho', 'grilled and wok', 'fried rice', 'banh mi', 'coffee', 'iced drinks', 'bubble juice', 'side orders'];

  function loaded() {
    return (
      <div className="menu-sections">
        {menuItems.map((element, index) => {
          return <div className={element} key={index + element}>
            <h1>{element.toUpperCase()}</h1>
            {menuMap(element)}
            </div>
        })}
      </div>
    )
  };

  function menuMap(element) {
    return (
      <>
        {menu.filter(menuItem => menuItem.foodType === element).map((menuItem, idx) =>
          <MenuItem 
            key={menuItem._id}
            idx={idx}
            itemNumber={menuItem.itemNumber}
            menuItemTag={menuItem.menuItemTag}
            name={menuItem.name} 
            englishName={menuItem.englishName}
            desc={menuItem.desc}
            price={menuItem.price}
            foodtype={menuItem.foodType}
          />
        )}
      </>
    )
  };

  return <>{menu ? loaded() : loading()}</>
}