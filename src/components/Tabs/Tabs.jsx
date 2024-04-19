export default function Tabs({ children, buttons, buttonsContainer}) {
    const ButtonsContainer = buttonsContainer;  //because uppercase

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
