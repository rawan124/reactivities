import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import CardMedia from "@mui/material/CardMedia"
import { Link, useNavigate, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities"


export default function ActivityDetail() {
    const navigate=useNavigate();
    const {id}=useParams<{id: string}>();
    const {activity, isLoadingActivity}= useActivities(id);
    
    if (isLoadingActivity) return <Typography>Loading...</Typography>
    
    if (!activity) return <Typography>Activity not found</Typography>
    return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia
        component="img" 
        height="140"
        image={`/assets/categoryImages/${activity.category}.jpg`}

        />
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
                        <Typography variant="subtitle1" fontWeight="light" >{activity.date}</Typography>
                                    <Typography variant="body1">{activity.description}</Typography>
            
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
                <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
            </CardActions>
</Card>
)}