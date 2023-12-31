import React, { useRef, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Footer = () => {
    return (
        <Box
            paddingx={3}
            paddingY={8}
            sx={{
                backgroundColor: "#FFF",
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <img
                    src="/static/images/Mooo.png"
                    alt="Mooo"
                    height="112"
                    width="112"
                />
                <Typography
                    sx={{
                        fontSize: "64px",
                        fontWeight: 900,
                    }}
                >
                    “KEEP MOOING”
                </Typography>
                <img
                    src="/static/images/Logo&Copyright.png"
                    alt="Brand"
                    height="111"
                    width="171"
                />
            </Stack>
        </Box>
    );
};

const NavBar = ({ handleNavClick, toggle }) => {
    return (
        <Box
            sx={{
                padding: "48px 96px",
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <img
                    src="/static/images/Brand.png"
                    alt="Brand"
                    height="46"
                    width="130"
                />
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={8}
                >
                    <Box
                        onClick={handleNavClick}
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: "18px",
                                color: "#FFF",
                                textTransform: "uppercase",
                            }}
                        >
                            Demands
                        </Typography>
                    </Box>
                    <Button
                        style={{
                            backgroundColor: "#2B2B2B",
                            display: "flex",
                            borderRadius: "3px",
                            padding: "10px 30px",
                            boxShadow: "none",
                            fontWeight: 900,
                            fontSize: "18px",
                            color: "white",
                        }}
                        variant="contained"
                        onClick={toggle}
                    >
                        <img
                            src="/static/images/Discord.png"
                            alt="discord"
                            width="34"
                            height="25"
                            style={{ marginRight: 12 }}
                        />
                        join now
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

const Demands = ({ demandsAnchor }) => {
    return (
        <Box padding="96px" width="60%" marginBottom="96px" ref={demandsAnchor}>
            <Typography
                sx={{
                    textTransform: "uppercase",
                    fontWeight: 900,
                    fontSize: "64px",
                    color: "#FFF",
                    lineHeight: 1.25,
                    marginBottom: "32px",
                }}
            >
                Our Demands
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 900,
                    fontSize: "18px",
                    color: "#FFF",
                    lineHeight: 1.75,
                    marginBottom: "48px",
                }}
            >
                We will be attempting to open negotiations for a bargaining
                agreement with Atrioc, and we are committed to finding common
                ground through compromise. However, if Atrioc refuses to comply,
                we are prepared to consider other options, including the
                possibility of a strike. By joining this Discord, you are
                committing to do all that you can to aid the collective in
                achieving our goals, with the hope that negotiations can lead to
                a fair and mutually beneficial agreement
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 900,
                    fontSize: "24px",
                    color: "#FFF",
                    lineHeight: 1.75,
                }}
            >
                Our demands of Mr. Streamer (aka Atrioc)
            </Typography>
            <List
                sx={{
                    listStyleType: "disc",
                    pl: 2,
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: 900,
                }}
            >
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    Atrioc must thank every sub.
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    ACLU gets to name 1 VIP per month (Potential VIPs must be
                    ratified with a 2/3 majority).
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    ACLU must be granted a minimum of 1 additional episode of
                    television (UNO MAS) per fiscal quarter.
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    Guarantee to watch Season 5 of House.
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    Proof of life for cherished community leader Burgzy.
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    ACLU is allowed 1 “Unban Forum” per fiscal quarter to free
                    our wrongfully convicted comrades.
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    Popathon 2
                </ListItem>
                <ListItem
                    sx={{
                        display: "list-item",
                    }}
                >
                    At least 2 EST friendly (and EU neutral) streams per month.
                </ListItem>
            </List>
        </Box>
    );
};

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
        window.open("https://discord.gg/X5D3CPd3", "_blank");
    };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

function App() {
    const demandsAnchor = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [playing, toggle] = useAudio("static/media/cow-moo.wav");

    const handleNavClick = () => {
        demandsAnchor.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (windowWidth < 1000) {
        return (
            <Box
                width="100%"
                height="100%"
                minHeight="100vh"
                sx={{
                    backgroundImage: "url(/static/images/LogoDark.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        padding: "16px",
                        paddingBottom: "32px",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <img
                            src="/static/images/Brand.png"
                            alt="Brand"
                            height="46"
                            width="130"
                        />
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button
                                style={{
                                    backgroundColor: "#2B2B2B",
                                    display: "flex",
                                    borderRadius: "3px",
                                    padding: "10px 30px",
                                    boxShadow: "none",
                                    fontWeight: 900,
                                    fontSize: "14px",
                                    color: "white",
                                }}
                                variant="contained"
                                onClick={toggle}
                            >
                                <img
                                    src="/static/images/Discord.png"
                                    alt="discord"
                                    width="34"
                                    height="25"
                                    style={{ marginRight: 12 }}
                                />
                                join now
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                <Box padding="16px" width="100%">
                    <Stack direction="column" spacing={4}>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 900,
                                fontSize: "48px",
                                color: "#FFF",
                                lineHeight: 1.25,
                                marginBottom: "16px",
                            }}
                        >
                            Defend the rights of all chatters globally
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                fontSize: "14px",
                                color: "#FFF",
                                lineHeight: 1.75,
                            }}
                        >
                            Atrioc Chat Labor Union's goal is simple. Criminal
                            justice, chatter's right to message freely,
                            chatter's right to vote - these are crucial issues,
                            and we're standing up for our freedoms against a
                            corrupt streamer. Join today and fuel our fight back
                            in Twitch chat, Discord channels, and YouTube
                            comment sections.
                        </Typography>
                        <Box>
                            <Button
                                style={{
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    borderRadius: "3px",
                                    padding: "10px 30px",
                                    boxShadow: "none",
                                    fontWeight: 900,
                                    fontSize: "14px",
                                    color: "#2B2B2B",
                                }}
                                variant="contained"
                                onClick={toggle}
                            >
                                <img
                                    src="/static/images/DiscordDark.png"
                                    alt="discord"
                                    width="34"
                                    height="25"
                                    style={{ marginRight: 12 }}
                                />
                                join now
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box
                width="100%"
                sx={{
                    backgroundImage: "url(/static/images/Logo.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                }}
            >
                <NavBar handleNavClick={handleNavClick} toggle={toggle} />
                <CssBaseline />
                <Box padding="96px" width="60%">
                    <Stack direction="column" spacing={4}>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 900,
                                fontSize: "64px",
                                color: "#FFF",
                                lineHeight: 1.25,
                                marginBottom: "32px",
                            }}
                        >
                            Defend the rights of all chatters globally
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                fontSize: "18px",
                                color: "#FFF",
                                lineHeight: 1.75,
                            }}
                        >
                            Atrioc Chat Labor Union's goal is simple. Criminal
                            justice, chatter's right to message freely,
                            chatter's right to vote - these are crucial issues,
                            and we're standing up for our freedoms against a
                            corrupt streamer. Join today and fuel our fight back
                            in Twitch chat, Discord channels, and YouTube
                            comment sections.
                        </Typography>
                        <Box>
                            <Button
                                style={{
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    borderRadius: "3px",
                                    padding: "10px 30px",
                                    boxShadow: "none",
                                    fontWeight: 900,
                                    fontSize: "18px",
                                    color: "#2B2B2B",
                                }}
                                variant="contained"
                                onClick={toggle}
                            >
                                <img
                                    src="/static/images/DiscordDark.png"
                                    alt="discord"
                                    width="34"
                                    height="25"
                                    style={{ marginRight: 12 }}
                                />
                                join now
                            </Button>
                        </Box>
                    </Stack>
                </Box>
                <Demands demandsAnchor={demandsAnchor} />
                <Footer />
            </Box>
        );
    }
}

export default App;
