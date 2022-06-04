import MenuItem from "../components/MenuItem";

export default function Menu({ menu }) {

  function loading() {
    return <h1>Loading...</h1>
  };

  function loaded() {
    return (
      <div>
        {menu.map((menuItem, idx) => 
          <MenuItem 
            key={menuItem._id}
            idx={idx}
            menuItemTag={menuItem.menuItemTag}
            name={menuItem.name} 
            englishName={menuItem.englishName}
            desc={menuItem.desc}
            price={menuItem.price}
            foodType={menuItem.foodType}
          />
        )}
      </div>
    )
  };

  return <div> {menu ? loaded() : loading()}</div>
}