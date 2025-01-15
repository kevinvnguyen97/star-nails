import React, { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Text,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

type PageLink = {
  name: string;
  path: string;
};
const LINKS: PageLink[] = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
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
      variant="plain"
      bg="none"
      fontWeight="normal"
    >
      {children}
    </Link>
  );
};

export const NavigationBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Box position="absolute" width="100%">
      <Flex alignItems="center" justifyContent="space-between" padding={2}>
        <IconButton
          size="sm"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          variant="ghost"
        >
          {isHamburgerMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
        <HStack gap={8} alignItems="center">
          <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
            {LINKS.map(({ name, path }) => (
              <NavLink key={name} onClick={() => navigate(path)}>
                <Text>{name}</Text>
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Logo />
      </Flex>

      {isHamburgerMenuOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} gap={4}>
            {LINKS.map(({ name, path }) => (
              <NavLink
                key={name}
                onClick={() => {
                  navigate(path);
                  setIsHamburgerMenuOpen(false);
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
