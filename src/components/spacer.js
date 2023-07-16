import { View } from "react-native";
import { styled } from "styled-components";

const TopSmall = styled(View)`
  margin-top: ${(props) => props.theme.space[1]};
`;

const TopMedium = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const TopLarge = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled(View)`
  margin-left: ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

const LeftLarge = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

const BottomSmall = styled(View)`
  margin-bottom: ${(props) => props.theme.space[1]};
`;

const BottomMedium = styled(View)`
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const BottomLarge = styled(View)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RightSmall = styled(View)`
  margin-right: ${(props) => props.theme.space[1]};
`;

const RightMedium = styled(View)`
  margin-right: ${(props) => props.theme.space[2]};
`;

const RightLarge = styled(View)`
  margin-right: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant }) => {
  switch (variant) {
    case "top.small":
      return <TopSmall></TopSmall>;
    case "top.medium":
      return <TopMedium></TopMedium>;
    case "top.large":
      return <TopLarge></TopLarge>;
    case "left.small":
      return <LeftSmall></LeftSmall>;
    case "left.medium":
      return <LeftMedium></LeftMedium>;
    case "left.large":
      return <LeftLarge></LeftLarge>;
    case "bottom.small":
      return <BottomSmall></BottomSmall>;
    case "bottom.medium":
      return <BottomMedium></BottomMedium>;
    case "bottom.large":
      return <BottomLarge></BottomLarge>;
    case "right.small":
      return <RightSmall></RightSmall>;
    case "right.medium":
      return <RightMedium></RightMedium>;
    case "right.large":
      return <RightLarge></RightLarge>;
  }
};
