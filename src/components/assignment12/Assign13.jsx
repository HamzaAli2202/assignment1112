import React from "react";
import { Grid,Button,TextField,Card,CardContent,Typography } from "@mui/material";

export const Assign12=()=>{
    return(
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    
    <Card>
        <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={6}>
               <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h4">
        BILLING ADDRESS
    </Typography>
                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Fullname" fullWidth />

                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Email" fullWidth />

                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Address" fullWidth />

                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="City" fullWidth />

                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="State" fullWidth />

                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Zip code" fullWidth />

                </Grid>
               </Grid>
            </Grid>
            <Grid item xs={6}>
               <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h4" >
        PAYMENT
    </Typography>
                </Grid>
                <Grid item xs={12}>
                <img src="./images/atmcard.png" height={50} alt="" />
<img src="./images/visacard.png" height={50} alt="" />

                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Credit Card Number" fullWidth />

                </Grid>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Type Number" fullWidth />

                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Exp date" fullWidth />

                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="CVV" fullWidth />

                </Grid>
                <Grid item xs={12}>
<Button fullWidth sx={{height:55,bgcolor:'#154c79',color:'white'}}>porcessed to checkout </Button>
                </Grid>
               </Grid>
            </Grid>
        </Grid>

        </CardContent>
        </Card>
        </Grid>
            </Grid>
    )
}

