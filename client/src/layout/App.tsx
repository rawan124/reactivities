
import { useEffect, useState } from 'react';
import './styles.css'
import { Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashBoard from '../features/activities/dashboard/ActivityDashBoard';

function App() {
 
  const [activities,setActivities]=useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<Activity | undefined>(undefined);
  const [editMode,setEditMode]=useState(false);
  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/activities")
    
    .then(response=>setActivities( response.data))

    return ()=>{}
  }, [])
  const handleSelectActivity=(id:string)=>{
    setSelectedActivity(activities.find(x=>x.id===id))
  }
  const handleCancelSelectActivity=()=>{
    setSelectedActivity(undefined);
  }
  const handleOpenForm=(id?:string )=>{
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }
  const handleFormClose=()=>{
    setEditMode(false);
  }
  const handleSumitForm=(activity: Activity)=>{
    if (activity.id){
      setActivities(activities.map(x => x.id===activity.id ? activity : x))
    }
    else{
      const newActivity={...activity, id: Math.random().toString()}
      setActivities([...activities, newActivity])
    }
    setEditMode(false);
  }
  const handleDeleteActivity=(id:string)=>{
    setActivities(activities.filter(x=>x.id!==id));
  }


  return (
  <>
    <CssBaseline /> 
    
    <NavBar openForm={handleOpenForm} />
    <Container maxWidth="xl" sx={{mt : 3}}>
      <ActivityDashBoard  activities={activities}
      selectActivity={handleSelectActivity}
      cancelSelectActivity={handleCancelSelectActivity}
      selectedActivity={selectedActivity}
      editMode={editMode}
     openForm={handleOpenForm}
      
      closeForm={handleFormClose}
      submitForm={handleSumitForm}
      deleteActivity={handleDeleteActivity}
      />
    </Container>
   
   
    
    
  </>
  )
}

export default App
