import { Text } from "react-native";
import { styled } from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const title = (theme) => `
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.body};
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium}
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const variants = {
  title,
  body,
  label,
  caption,
  error,
  hint,
};

export const TypoText = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = { variant: "body" };
