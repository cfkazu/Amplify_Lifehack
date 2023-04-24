import { useAuthenticator } from "@aws-amplify/ui-react";

import styles from "../styles/Nav.module.css"
import Logout from "./logout";
import Login from "./login";
import { SearchIcon } from "@/icon/searchIcon";
import { Navbar, Text, Avatar, Dropdown, Input ,Button,Link} from "@nextui-org/react";
const Nav = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  return(
    <nav>

      <Navbar isBordered variant="floating">
        <Navbar.Brand>
       
          <Text b color="inherit" hideIn="xs">
            LIFEHACK
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/create_post">投稿</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          {route == "authenticated" ? <Logout /> :
            <>
          <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="/login">
              Sign Up
            </Button>
              </Navbar.Item>
            </>
          }
           </Navbar.Content>
           <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
{/*       <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/message"}>メッセージ</Link>
        </li>
        <li>
          <Link href={"/create_post"}>投稿</Link>
        </li>
        {route == "authenticated" ? <Logout/>  : <Login/>}
      </ul> */}
    </nav>
  )
}

export default Nav