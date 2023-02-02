import React, { useEffect, useRef, useState } from "react";
import LogoLLheader from "./images/LogoLLheader.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const NavBarRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const NavBarElement = NavBarRef.current;
      if (!NavBarElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        NavBarElement.style.transform = "translateY(0)";
      } else {
        if (!toggleMenu) {
          NavBarElement.style.transform = "translateY(-200px)";
        } else {
          NavBarElement.style.transform = "translateY(0)";
        }
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  const handleClick = (anchor) => () => {
    navigate(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      item_name: "Home",
      item_link: "Home",
      item_route: "#Home"
    },
    {
      item_name: "Menu",
      item_link: "Menu",
      item_route: "#Menu"

    },
    {
      item_name: "Order Online",
      item_link: "Menu",
      item_route: "#OrderOnline"
    },
    {
      item_name: "Testimonials",
      item_link: "Testimonials",
      item_route: "#Testimonials-section"
    },
    {
      item_name: "About",
      item_link: "About",
      item_route: "#About-section"
    },
    {
      item_name: "Reserve a Table",
      item_link: "Reservation",
      item_route: "#Reservation-section"
    },

  ]

  return (
    <HStack
      ref={NavBarRef}
      top='0'
      left='0'
      right='0'
      width='100%'
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="azure"
      padding="0.5rem 2.5rem"
      position="fixed"
      translateY="0"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      fontWeight="bold"
      fontSize="18px"
      color="rgb(73,94,87)"
      zIndex={5}
      ml={-2}
    >
      <Image src={LogoLLheader} alt="app__logo" display="flex" width={{ base: "150px", md: "160px", lg: "180px" }} />

      {navItems.map(navItem => {
        return (
          <Heading
            as="h1"
            fontSize={{ base: "10px", md: "16px", lg: "20px" }}
            display={{ base: "none", md: "flex", lg: "flex" }}
            _hover={{textDecoration:"underline"}}>
            <a href={navItem.item_route} onClick={handleClick(navItem.item_link)}>
              {navItem.item_name}
            </a>
          </Heading>
        )
      })}

      <Heading display={{ base: "flex", md: "none", lg: "none" }}>
        <GiHamburgerMenu color="rgb(73,94,87)" fontSize={27} onClick={() => setToggleMenu(true)} />
      </Heading>

      {toggleMenu && (
        <VStack
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            transition: ".5s ease",
            flexDirection: "column",
            zIndex: "5",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navItems.map(navItem => {
            return (
              <Heading
                style={{
                  margin: "2rem",
                  cursor: "pointer",
                  color: "azure",
                  fontSize: "2rem",
                  textAlign: "center",
                  fontFamily: "calibri"
                }}
              >
                <a href={navItem.item_route} onClick={() => {
                  setToggleMenu(false);
                  navigate(`/${navItem.item_link}`)
                }}
                >
                  {navItem.item_name}
                </a>
                </Heading>
                )
          })}

                
              </VStack>
            )
          }
    </HStack>
      );
};

      export default NavBar;