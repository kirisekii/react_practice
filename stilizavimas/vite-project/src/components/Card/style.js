import { styled } from "styled-components";

export const StyledCardWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  color: white;
  width: 300px;
  padding: 0.5em;
  margin: 0.5em;
`;

export const StyledCardHeaderContainer = styled.div``;

export const StyledCardHeader = styled.h5`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const StyledDivider = styled.div`
  color: lightblue;
`;

export const StyledCardContentContainer = styled.div``;

export const StyledCardContentHeader = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const StyledCardContentParagraph = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
