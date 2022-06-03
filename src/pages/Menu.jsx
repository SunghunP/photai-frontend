export default function Menu() {
  const menuItems = null

  function loading() {
    return <h1>loading...</h1>
  }

  function loaded() {
    return <h1>hi</h1>
  }

  return <div> {menuItems ? loading() : loaded()}</div>
}