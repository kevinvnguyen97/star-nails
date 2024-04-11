import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  Button,
  useColorMode,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

type PageLink = {
  name: string;
  path: string;
};
const LINKS: PageLink[] = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

type NavLinkProps = {
  onClick?: () => void;
  children: ReactNode;
};
const NavLink = (props: NavLinkProps) => {
  const { onClick, children } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
      }}
      onClick={onClick}
      as={Button}
      variant="ghost"
      bg="none"
      fontWeight="normal"
    >
      {children}
    </Link>
  );
};

export const NavigationBar = () => {
  const {
    isOpen: isHamburgerMenuOpen,
    onOpen: onHamburgerMenuOpen,
    onClose: onHamburgerMenuClose,
  } = useDisclosure();

  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();
  const boxColor = useColorModeValue("gainsboro", "#222222");

  return (
    <Box bgColor={boxColor} paddingLeft={5} paddingRight={5}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isHamburgerMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={
            isHamburgerMenuOpen ? onHamburgerMenuClose : onHamburgerMenuOpen
          }
          variant="ghost"
        />
        <HStack spacing={8} alignItems="center">
          <Text fontWeight="bold" color="red">
            <Text color="dodgerblue" display="inline">
              ★
            </Text>{" "}
            NAILS
          </Text>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {LINKS.map(({ name, path }) => (
              <NavLink key={name} onClick={() => navigate(path)}>
                <Text>{name}</Text>
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center" gap={2}>
          <MoonIcon />
          <Switch
            isChecked={colorMode === "light" ? true : false}
            onChange={toggleColorMode}
          />
          <SunIcon />
        </Flex>
      </Flex>

      {isHamburgerMenuOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {LINKS.map(({ name, path }) => (
              <NavLink
                key={name}
                onClick={() => {
                  navigate(path);
                  onHamburgerMenuClose();
                }}
              >
                <Text>{name}</Text>
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
