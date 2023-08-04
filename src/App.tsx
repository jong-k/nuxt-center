import { Box, Icon, IconButton } from "@chakra-ui/react";
import { Square } from "react-feather";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Box
        position="absolute"
        top="20px"
        left="20px"
        backgroundColor="white"
        padding={2}
        boxShadow="md"
        borderRadius="md"
      >
        <IconButton
          aria-label="Add Rectangle"
          icon={<Icon style={{ width: 24, height: 24 }} as={Square} />}
        />
      </Box>
    </div>
  );
}
