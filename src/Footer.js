import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider} from "@material-ui/core"

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://i.scdn.co/image/ab6775700000ee8524ef03f528d08f05f3b3af06" alt="album-logo"/>
                <div className="footer_songInfo">
                    <h4>Ankit</h4>
                    <p>Spotify Clone</p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className=" footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>

            <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
            </Grid>
            </div>

        </div>
    );
}

export default Footer;