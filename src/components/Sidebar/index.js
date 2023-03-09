import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactIcon from "@mui/icons-material/ContactMail";
import EventIcon from "@mui/icons-material/Event";
import { Avatar } from "@mui/material";
import Link from "@mui/material/Link";
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));
const navLinks = [
    {
        name: "Registered Events",
        link: "/events/registered",
        icon: <AppRegistrationIcon />,
    },
    {
        name: "All Events",
        link: "/events",
        icon: <EventIcon />,
    },
    {
        name: "Profile",
        link: "/profile",
        icon: <PersonIcon />,
    },
    {
        name: "Logout",
        link: "",
        icon: <LogoutIcon />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: <ContactIcon />,
    },
];
export default function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader className="flex justify-center my-10">
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                    />
                </DrawerHeader>
                <Divider />
                <List>
                    {navLinks.map((navItem, index) => (
                        <Link href={navItem.link} underline={"none"}>
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {navItem.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={navItem.name}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>

                <Divider />
                <DrawerHeader className="mt-auto">
                    <IconButton onClick={handleDrawer}>
                        {open === false ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
            </Drawer>
        </Box>
    );
}
