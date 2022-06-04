export default function MenuItem({ idx, menuItemTag, name, englishName, desc, price, foodType}) {
  return <div>
    <p key={idx}>
      {menuItemTag} {englishName} {name} {price}
    </p>
  </div>
}