export const getBorderColor = (visible: boolean) =>
  visible ? "#ccc" : "transparent";

export const getCenteredCoordinates = (width: number, height: number) => ({
  left: (window.innerWidth - width) / 2,
  top: (window.innerHeight - height) / 2,
});
