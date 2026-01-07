import { useAccount } from "../../lib/hooks/useAccount";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";
import TextInput from "../../shared/components/TextInput";
import { LockOpen } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";


export default function LoginForm(){
    const {loginUser}=useAccount();
    const navigate=useNavigate();

    const { control, handleSubmit, formState: {isValid, isSubmitting} } = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });

    const onSubmit=async (data:LoginSchema)=>{
        await loginUser.mutateAsync(data, {
            onSuccess: ()=>{
               navigate('/activities');
            }
        });
    }
return (
<Paper component='form' onSubmit={handleSubmit(onSubmit)} sx={{display:'flex', flexDirection:'column', gap:3, maxWidth:'md', mx:'auto', borderRadius:3, p:3}}>
<Box display='flex' alignItems='center' justifyContent='center' gap={3} color='secondary.main'>
    <LockOpen fontSize="large"/>
    <Typography variant="h4">Sign in</Typography>

</Box>
<TextInput label="Email" name="email" control={control}/>
<TextInput label="Password" name="password" control={control}/>

<Button type='submit' 
disabled={!isValid || isSubmitting}
 variant="contained" size="large">
Login 
</Button>
<Typography sx={{textAlign:'center'}}>
Don't Have an account?
<Typography sx={{ml:2}}component={Link} to='/register' color='primary' >
Register
</Typography>

    </Typography>
</Paper>
)
}
