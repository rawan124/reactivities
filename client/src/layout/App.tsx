
import { useEffect, useState } from 'react';
import './styles.css'
import { Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashBoard from '../features/activities/dashboard/ActivityDashBoard';

function App() {
 
  const [activities,setActivities]=useState<Activity[]>([]);
  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/activities")
    
    .then(response=>setActivities( response.data))

    return ()=>{}
  }, [])
  return (
  <>
    <CssBaseline /> 
    
    <NavBar />
    <Container maxWidth="xl" sx={{mt : 3}}>
      <ActivityDashBoard  activities={activities}/>
    </Container>
   
   
    
    
  </>
  )
}

export default App
