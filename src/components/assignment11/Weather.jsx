import React, { useState } from "react";
import { Grid,Card,CardContent, TextField,Button } from "@mui/material";



export const Weather =()=>{
    const [city,setCity]=useState("mumbai");
    const [input,setInput]=useState("");

    const handleSubmit=()=>{
        setInput(city);
    }
    return(
        <div style={{textAlign:"center"}} className="sub">
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <h1>Assignment 11</h1>
                       <Card xs={{bgcolor:"#e3edfc"}}>
                        <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><h2>Weather App</h2></Grid>
                            <Grid item xs={12}>
                                <TextField onChange={(e)=>setCity(e.target.value)} variant="outlined" label="Enter City" fullWidth />
                                </Grid>
                                   <Grid item xs={12}>
                                    <Button onClick={handleSubmit} variant="contained" fullWidth color="secondary">Search</Button>
                                </Grid>
                                <Grid item xs={12}><h2>City : {input} </h2></Grid>
                                <Grid item xs={12}><h2>Weather : 🌦️ </h2></Grid>
                            
                            </Grid>
                        </CardContent>
                       </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                </Grid>            
        </div>
    )
}