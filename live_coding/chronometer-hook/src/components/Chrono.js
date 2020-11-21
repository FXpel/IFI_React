import React, { useState, useLayoutEffect } from "react";
import { Card, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import { Pause, PlayArrow, Replay } from "@material-ui/icons";

function Chrono(props) {

    var date = new Date();

    const [started, setStarted] = useState(false);
    const [startTS, setStartTS] = useState(date);
    const [diff, setDiff] = useState(new Date(date.getTimezoneOffset() * 60000));

    const setInitialState = () => {
        var date = new Date();

        setStarted(false);
        setStartTS(date);
        setDiff(new Date(date.getTimezoneOffset() * 60000));
    };

    const start = () => {
        setStartTS(new Date(new Date() - diff));
        setStarted(true);
    };

    const stop = () => {
        setStarted(false);
    };

    const reset = () => {
        setInitialState();
    };

    useLayoutEffect(() => {
        if (started) {
            let f;

            const tick = () => {
                setDiff(new Date(new Date() - startTS));
                f = requestAnimationFrame(tick);
            };

            f = requestAnimationFrame(tick);

            return () => cancelAnimationFrame(f);
        }
    }, [started, startTS]);

    var centiseconds = Math.floor(diff.getMilliseconds() / 10);
    var seconds = diff.getSeconds();
    var minutes = diff.getMinutes();

    return (
        <Card>
            <CardContent>
                <Typography component="h1" variant="h4">{props.title}</Typography>
                <Typography component="div" variant="h5">{minutes}:{seconds}:{centiseconds}</Typography>
            </CardContent>
            <CardActions>
                {
                    !started ?
                        <IconButton onClick={start}><PlayArrow /></IconButton> :
                        <IconButton onClick={stop}><Pause /></IconButton>
                }
                <IconButton onClick={reset}><Replay /></IconButton>
            </CardActions>
        </Card>
    );

}

export default Chrono;