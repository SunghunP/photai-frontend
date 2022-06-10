export default function MenuItem({ idx, menuItemTag, name, englishName, desc, price, foodType}) {
  return <div className="menuItems">
    <p key={idx} id={idx} foodType={foodType}>
      {menuItemTag} {englishName} {name} {price}
    </p>
  </div>
}