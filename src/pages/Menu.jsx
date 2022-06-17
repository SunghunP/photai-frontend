import MenuItem from "../components/MenuItem";
import styled from "styled-components";

// need to work on mobile responsiveness.
const StyledMainDiv = styled.div`
  font-family: 'Alata', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center; 
  background-image: url(${props => props.bg});
  background-size: cover;
`

const StyledItemsDiv = styled.div`
  h1 {
    background: rgba(255,255,255, 0.4);
    border: 1px solid black;
    max-width: 750px;
    width: 750px;
    font-size: 50px;
  }
`

export default function Menu({ menu, forestBg }) {

  function loading() {
    return <h1>Loading...</h1>
  };

  const menuItems = ['appetizer', 'special combo tray', 'noodle salad bowl', 'rice plate', 'pho', 'grilled and wok', 'fried rice', 'banh mi', 'coffee', 'iced drinks', 'bubble juice', 'side orders'];

  function loaded() {
    return (
      <StyledMainDiv bg={forestBg} className="menu-sections">
        {menuItems.map((element, index) => {
          return <StyledItemsDiv className={element} key={index + element}>
            <h1>{element.toUpperCase()}</h1>
            {menuMap(element)}
          </StyledItemsDiv>
        })}
      </StyledMainDiv>
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