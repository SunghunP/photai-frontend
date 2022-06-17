export default function MenuItem({ idx, itemNumber, menuItemTag, name, englishName, desc, price, foodtype}) {
  return <div className="menuItems">
    <p key={idx} id={itemNumber} foodtype={foodtype}>
      {menuItemTag} {englishName} {name} {price}
    </p>
  </div>
}