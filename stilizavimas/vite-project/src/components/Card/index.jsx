import { StyledCardWrapper } from "./style";
import { StyledCardHeaderContainer } from "./style";
import { StyledCardHeader } from "./style";
import { StyledDivider } from "./style";
import { StyledCardContentContainer } from "./style";
import { StyledCardContentHeader } from "./style";
import { StyledCardContentParagraph } from "./style";

const Card = ({ color }) => {
  let backgroundColor = "";

  switch (color) {
    case "secondary":
      backgroundColor = "grey";
      break;
    case "success":
      backgroundColor = "green";
      break;
    case "danger":
      backgroundColor = "red";
      break;
    case "info":
      backgroundColor = "lightblue";
      break;
    default:
      backgroundColor = "blue";
      break;
  }

  return (
    <StyledCardWrapper backgroundColor={backgroundColor}>
      <StyledCardHeaderContainer>
        <StyledCardHeader>Header</StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider></StyledDivider>
      <StyledCardContentContainer>
        <StyledCardContentHeader>Secondary card title</StyledCardContentHeader>
        <StyledCardContentParagraph>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

export default Card;
