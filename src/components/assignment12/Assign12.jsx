import React from "react";
import { Grid,Button } from "@mui/material";
export const Assign12=()=>{
    return(
       <div style={{padding:50,margin:10,backgroundColor:'bisque',height:'100vh'}}>
       <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="success" fullWidth>1</Button>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary" fullWidth>2</Button>              
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="secondary" fullWidth>2</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="error" fullWidth>3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="error" fullWidth>3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="error" fullWidth>3</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary" fullWidth>2</Button>              
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="secondary" fullWidth>2</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="success" fullWidth>1</Button>
            </Grid>
            <Grid item xs={5}></Grid>

        </Grid>
        </div>
    )
}