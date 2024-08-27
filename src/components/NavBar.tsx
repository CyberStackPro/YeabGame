import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-ff4914e6.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <>
      {/* HStack => HorizontalStack */}
      <HStack padding="10px">
        <Link to={"/"}>
          <Image src={logo} objectFit="cover" boxSize="70px" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
