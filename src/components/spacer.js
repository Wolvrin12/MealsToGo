import { View } from "react-native";
import { styled, useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const sizeValue = theme.space[sizeIndex];
  const positionIndex = positionVariant[position];
  return `${positionIndex}: ${sizeValue}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
