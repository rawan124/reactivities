import {Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";

type Props ={
    activities: Activity[]
}
export default function ActivityDashBoard({activities}: Props){
return (
    <><Grid2 container >
        <Grid2 size={9}>
            <ActivityList activities={activities} />
        </Grid2>
    </Grid2><Grid2 size={5}>
            {activities[0] && <ActivityDetail activity={activities[0]} />}
        </Grid2></>
)
} 