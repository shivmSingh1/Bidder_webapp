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

export const signInInitialValues ={
    email:"",
    password:"",
}

export const signInValidationSchema = Yup.object({
    email:Yup.string().email("provide valid email").required("email is required"),
    password:Yup.string().required("password is required"),
})

export const forgotPasswordInitialValue ={
    email:"",
}

export const forgotPasswordValidationSchema = Yup.object({
    email:Yup.string().email("provide valid email").required("email is required"),
})

export const resetPasswordInitialValues ={
    confirmPassword:"",
    password:"",
}

export const resetPasswordValidationSchema = Yup.object({
    confirmPassword:Yup.string().required("confirm password is required"),
    password:Yup.string().required("password is required"),
})

export const auctionFormikInitialValues={
    itemName:"",
    description:"",
    basePrice:"",
    startDate:"",
    endDate:"",
    category_id:"",
    images:[]
}

export const auctionFormikValidationSchema = Yup.object().shape({
  itemName: Yup.string()
    .required("Item name is required")
    .min(3, "Item name must be at least 3 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  basePrice: Yup.number()
    .typeError("Base price must be a number")
    .required("Base price is required")
    .positive("Base price must be greater than 0"),

//   startDate: Yup.date()
//     .required("Start date is required")
//     .min(new Date(), "Start date cannot be in the past"),

//   endDate: Yup.date()
//     .required("End date is required")
//     .when("startDate", (startDate, schema) =>
//       startDate
//         ? schema.min(startDate, "End date must be after start date")
//         : schema
//     ),

//   category_id: Yup.string()
//     .required("Category is required"),

//   images: Yup.array()
//     .min(1, "At least 1 image is required")
//     .of(Yup.mixed())
});