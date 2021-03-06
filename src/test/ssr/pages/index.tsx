import Head from "next/head";
import { createMakeStyle, css } from "tss-react";
import { useTheme } from "../shared/theme";

const { makeStyles } = createMakeStyle({ useTheme });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <App
                className={css({ "boxShadow": "10px 5px 5px teal" })}
            />
        </>
    );
}

const { useStyles } = makeStyles()(theme => ({
    "root": {
        "& > h1:nth-child(2)": {
            "color": theme.limeGreen,
        },
    },
}));

function App(props: { className?: string; }) {
    const { className } = props;
    const { classes, css, cx } = useStyles();

    return (
        <div className={classes.root}>
            <h1>Black</h1>
            <h1>Should be lime green</h1>
            <h1
                className={cx(
                    css({ "border": "1px solid black" }),
                    className
                )}
            >
                Black, should have border and shadow
            </h1>
        </div>
    );
}
