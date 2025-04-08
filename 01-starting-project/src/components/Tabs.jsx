export default function Tabs({ children, menuItems, ItemsContainer = 'menu' }) {
  // const ItemsContainer = itemsContainer;
  return (
    <>
      <ItemsContainer>
        {menuItems}
      </ItemsContainer>
      {children}
    </>
  );
}