export default function Tabs({ children, buttons, buttonsContainer = "menu"}) {
    const ButtonsContainer = buttonsContainer;  //because uppercase

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
