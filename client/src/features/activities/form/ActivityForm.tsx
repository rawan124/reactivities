import {Box, Button, Paper, Typography } from "@mui/material";

import { useActivities } from "../../../lib/hooks/useActivities";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { activitySchema, type ActivitySchema } from "../../../lib/schemas/activitySchema";
import TextInput from "../../../shared/components/TextInput";
import SelectInput from "../../../shared/components/SelectInput";
import { categoryOptions } from "./categoryOptions";
import DateTimeInput from "../../../shared/components/DateTimeInput";
export default function ActivityForm(){
    const { reset, control,handleSubmit}=useForm<ActivitySchema>(
        {
            mode:'onTouched',
            resolver: zodResolver(activitySchema)
        }
    );
    const {id} = useParams()
    const {updateActivity, createActivity, activity, isLoadingActivity} = useActivities(id);
    //const navigate=useNavigate();
    useEffect(()=>{
        if (activity) reset({
            ...activity,
            
        })
    }, [activity, reset]);
const onSubmit =async (data: ActivitySchema)=>{
    console.log(data);

            // if (activity) {
            //     data.id=activity.id;
            //     await updateActivity.mutateAsync(data as unknown as Activity);
            //     navigate(`/activities/${activity.id}`);
            // }
            // else{
            //      createActivity.mutate(data as unknown as Activity, { 
            //      onSuccess: (id)=>{
            //         navigate(`/activities/${id}`);
            //      }
            //     });
            // }
        }
        if (isLoadingActivity) return <Typography>Loading...</Typography>
        
    return (
    <Paper sx={{borderRadius: 3, padding:3}}>
       
       
        <Typography variant="h5" gutterBottom color="primary">
        {activity? 'Edit Activity' : 'Create Activity'}


            </Typography>
            <Box onSubmit={handleSubmit(onSubmit)} component="form" display='flex' flexDirection='column' gap={3}>
                <TextInput label='Title' control={control} name="title" />
                <TextInput  label='Description' multiline rows={3} control={control} name="description" />
                <Box display='flex' gap={3}>
                <SelectInput items={categoryOptions} label='Category' control={control} name="category" />
                <DateTimeInput label='Date' control={control} name="date" />
                </Box>
                <TextInput label='City' control={control} name="city" />
                <TextInput label='Venue' control={control} name="venue" />
                <Box display='flex' justifyContent='space-end' gap={3}>
                    <Button color='inherit'>Cancel</Button>
                    <Button type="submit" color='success' variant="contained"
                    disabled={
                        updateActivity.isPending || createActivity.isPending
                    }>Submit</Button>

                </Box>
            </Box>
    </Paper>
)}
            