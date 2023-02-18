import React, {useState} from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { TextField, FormControl, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Info from "./info";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const MidContainer = () => {  

  const [items, setItems] = useState(Info);   //for changing states of data after filteration


  let ele1=null;
  let ele2=null;
  let ele3=null;
  let ele4=null;

  const priceChanged = (event) => {            // for getting state of price after selection
      const {value} = event.target;
      ele1 = value;
  }

    const typeChanged = (event) => {          // for getting state of proprty_type after selection
      const {value} = event.target;
      ele2 = value;
    }

    const locationChanged = (event) => {     // for getting state of location after selection
      const {value} = event.target;
      ele3 = value;
    }
    
    const dateChanged = (event) => {         // for getting state of move-in date after selection
      const {value} = event.target; 
      ele4 = value;
    }

  const handleFilter =  () => {               // data fileration after clicking on search button
    const upd  = Info.filter((ele)=>{
       if(ele.location===ele3 && ele.price===ele1 && ele.property_type===ele2 && ele.date===ele4){
          return ele.location===ele3 && ele.price===ele1 && ele.property_type===ele2 && ele.date===ele4;
       }
    })
      setItems(upd);
  }

  return (
    <>
        <Container maxWidth="md" sx={{background:"aliceblue", marginTop:"100px"}}>
        <Box sx={{background:"", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <h1>Search properties to rent</h1>
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{fontSize:"10px", marginTop:"15px"}}/>
        </Box>
        <Box sx={{background:"white", marginTop:"20px"}}>
          <FormControl sx={{ m: 1, minWidth: 100, left:"49px"}}>
            <InputLabel id="demo-controlled-open-select-label" sx={{color: "#000000", fontWeight:"700"}}>Price</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={priceChanged}
            >
              <MenuItem value="100$-200$" sx={{fontWeight:"700"}}>100$-200$</MenuItem>
              <MenuItem value="200$-300$" sx={{fontWeight:"700"}}>200$-300$</MenuItem>
              <MenuItem value="300$-400$" sx={{fontWeight:"700"}}>300$-400$</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 170, left:"45px" }}>
            <InputLabel id="demo-controlled-open-select-label" sx={{color: "#000000", fontWeight:"700"}}>Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={typeChanged}
            >
              <MenuItem value="House" sx={{fontWeight:"700"}}>House</MenuItem>
              <MenuItem value="Apartment" sx={{fontWeight:"700"}}>Apartment</MenuItem>
              <MenuItem value="Flat" sx={{fontWeight:"700"}}>Flat</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 130, left:"45px" }}>
            <InputLabel id="demo-controlled-open-select-label" sx={{color: "#000000", fontWeight:"700"}}>Location</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={locationChanged}
            >
              <MenuItem value="Delhi" sx={{fontWeight:"700"}}>Delhi</MenuItem>
              <MenuItem value="Bengaluru" sx={{fontWeight:"700"}}>Bengaluru</MenuItem>
              <MenuItem value="Hyderabad" sx={{fontWeight:"700"}}>Hyderabad</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 160, left:"45px" }}>
            <InputLabel id="demo-controlled-open-select-label" sx={{color: "#000000", fontWeight:"700"}}>Move-in Date</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={dateChanged}
            >
              <MenuItem value="02/19/2023" sx={{fontWeight:"700"}}>02/19/2023</MenuItem>
              <MenuItem value="02/20/2023" sx={{fontWeight:"700"}}>02/20/2023</MenuItem>
              <MenuItem value="02/21/2023" sx={{fontWeight:"700"}}>02/21/2023</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" sx={{ top:"18px", backgroundColor:"purple", left:"55px"}} onClick={()=> handleFilter()}>Search</Button>
        </Box>

        <Box sx={{marginTop:"40px", minHeight:"180vh"}}>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              {
                 items.map((ele) => {                     //displaying of combined data
                    const {image, price, location, date, property_type} = ele;

                    return (
                      <Grid item xs={2} sm={4} md={4} >
                            <Card sx={{ maxWidth: 256 }}>
                                <CardMedia
                                  component="img"
                                  alt="green iguana"
                                  height="150"
                                  image={image}
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h6" component="div">
                                    Type: {property_type}
                                  </Typography>
                                  <Typography variant="body1" color="text.secondary">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                  </Typography>
                                </CardContent>
                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                    Price: {price}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Location: {location}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    You Can Move-in: {date}
                                  </Typography>
                                </CardContent>
                            </Card>
                      </Grid>
                    )
                 })
              }
              
        </Grid>
        </Box>
        </Container>
    </>
  )
}

export default MidContainer