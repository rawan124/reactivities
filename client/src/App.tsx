
import { useEffect, useState } from 'react';
import './App.css'
import { ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

function App() {
 
  const [activities,setActivities]=useState<Activity[]>([]);
  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/activities")
    
    .then(response=>setActivities( response.data))

    return ()=>{}
  }, [])
  return (
    <>
    
    
    <Typography variant='h3'> Reactivities</Typography>
    <ul>
    {activities.map((activity)=>(
      <ListItem key={activity.id}><ListItemText primary={activity.title}></ListItemText> </ListItem>
    ))}
    </ul>
    </>
  )
}

export default App
