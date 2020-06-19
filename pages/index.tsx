import React from 'react';
import {Grid, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.common.white,
    },
    gridHeader: {
        position: 'relative'
    },
    backgroundCover: {
        // position: 'absolute',
        width: '100%'
    },
    header: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
    },
    logo: {
        width: 165,
    },
    menuItem: {
        color: 'white',
    },
    sloganSearch: {
        fontWeight: 'bold',
        color: 'white',
    },
    cardFirst: {
        height: 250,
        margin: 16,
    },
}));

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.gridHeader}>
                <img
                    className={classes.backgroundCover}
                    alt={''} src={'https://cdn1.tripoto.com/assets/2.3/img/home_banner.jpg'}/>
                <Grid className={classes.header} container direction="row"
                      justify="space-between"
                      alignItems="center">
                    <Grid item>
                        <img src={'https://cdn1.tripoto.com/assets/2.3/img/logo/tripoto.svg'} className={classes.logo}
                             alt={'logo'}/>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={4}>
                            <Grid item>
                                <Typography variant="h6" component="h6" className={classes.menuItem}>
                                    Inspirations
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h6" className={classes.menuItem}>
                                    Inspirations
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/*<Typography variant="h3" component="h1" className={classes.sloganSearch}>*/}
                {/*    The Global Community of Travellers*/}
                {/*</Typography>*/}
                {/*</div>*/}
            </Grid>
            <Grid item xs={10} lg={10}>
                <img
                    src={'https://cdn1.tripoto.com/media/filter/tst/img/319486/Image/1586846041_1584363033_contests_2.png'}
                    alt={''} className={classes.cardFirst}/>
                <img
                    src={'https://cdn1.tripoto.com/media/filter/tst/img/319486/Image/1586846041_1584363033_contests_2.png'}
                    alt={''} className={classes.cardFirst}/>
            </Grid>
            <Grid item>
                <Grid container>

                </Grid>
            </Grid>
        </Grid>
    );
}
