import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ children, term }: Props) => {
  return (
    <Box marginY={5}>
      {/* <dt></dt> */}
      <Heading fontSize={"md"} color="gray.600" as="dt">
        {term}
      </Heading>

      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
