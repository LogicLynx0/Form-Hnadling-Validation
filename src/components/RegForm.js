import { useState } from "react";
import { useForm } from "react-hook-form";

const RegForm = () => {
    // const [inputName, setInputName] = useState('')
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const onSubmit = (data) => {
        
        console.log(data);
        setIsFormSubmitted(true);
    }
    // console.log(watch('example'));
    // console.log(watch('email'));
    return (
        <>
            <h4>Registration Form</h4>
            <div className="form-container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input {...register('example')} />
                    {errors.name && <p>Name is required</p>}
                </label>
                <br /><br />
              
                <label>
                    Email:
                    <input 
                        type="email"
                        name='email'
                        {...register('email',{
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                    />

                </label>
                <br /><br />
                <label>
                    Password:
                    <input {...register("password", {
                         required: true,
                         maxLength:{
                            value: 8,
                            message:'password should be at least 8 characters'
                         }
                        })} 
                        type="password" 
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                </label>
                <br /><br />
                <label>
                    Confirm Password:
                    <input {...register("confirmPassword", {
                         required: true,
                         validate: (value) => value === watch('password') || 'password do not match'
                          })}
                        type='password'
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </label>
                <br /><br />
                <input type="submit" />            
                </form>
                {isFormSubmitted && <NewComponent />}
            </div>
        </>
    )
}
function NewComponent(){
    return <h4>Form is Submit</h4>
}
export default RegForm;