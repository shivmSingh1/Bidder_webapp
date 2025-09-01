import * as Yup from "yup"


export const signupInitialValues ={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
}

export const signupValidationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("lastName is required"),
    email:Yup.string().email("provide valid email").required("email is required"),
    password:Yup.string().required("password is required"),
    confirmPassword:Yup.string().required("confirm password is required"),
})