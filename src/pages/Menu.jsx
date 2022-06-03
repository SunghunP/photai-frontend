import MenuItem from "../components/MenuItem";

export default function Menu({ menu }) {

  function loading() {
    return <h1>Loading...</h1>
  };

  function loaded() {
    return (
      <>
        {menu.map((menuItem) => 
          <MenuItem id={menuItem._id} name={menuItem.name} />
        )}
      </>
    )
  };

  return <div> {menu ? loaded() : loading()}</div>
}