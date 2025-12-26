import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import Box from "@mui/material/Box/Box";
import { List, ListItemText, Paper } from "@mui/material";
const Counter= observer(function Counter() {
    const {counterStore}= useStore();
  return (
    <Box display='flex' justifyContent='space-between'>
    
    <Box sx={{width: '60%'}}>
        
        <Typography variant="h4" gutterBottom>
        {counterStore.title}
      </Typography>
      <Typography variant="h6">
        The Count is: {counterStore.count}
      </Typography>
      
        
    
        
        <ButtonGroup>
            <Button onClick={()=>counterStore.decrement()} variant="contained" color="error">Decrement </Button>
            <Button onClick={()=>counterStore.increment()} variant="contained" color="success">Increment </Button>
            <Button onClick={()=>counterStore.increment(5)} variant="contained" color="primary">Increment by 5 </Button>
            
            
        </ButtonGroup>
        </Box>
        <Paper sx={{width: '40%'}}>
            <Typography variant="h5"> Counter events  ({counterStore.eventCount})  </Typography>
            <List>
                {counterStore.events.map((event, index)=>(
                    <ListItemText key={index}>{event}</ListItemText>
                ))}
            </List>


        </Paper>
    </Box>
  )
});
export default Counter;