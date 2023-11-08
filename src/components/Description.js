import React from "react";
import { Typography, Box, TextField, Switch } from "@mui/material";
import { useState } from "react";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText = "heihei";
  const [value, setValue] = useState("");
  const[checked, setChecked] = useState(false);
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <Switch value={checked} onChange={(e) => setChecked(e.target.checked)}/>
      <Typography variant="body1">{descriptionText}</Typography>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)}/>

    </Box>
  );
};

export default Description;
