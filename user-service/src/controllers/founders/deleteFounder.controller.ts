// import { Request, Response } from "express";
// import { Employee } from "../../enitities/entityClasses/employee.interface";
// import catchAsync from "../../utils/asyncErrorHandler";
// import createEmployeesUsecase from "../../usecases/employees/createEmployees.usecase";
// import { Founder, FounderSignup } from "../../enitities/entityClasses/founder.interface";
// import createFounderUsecase from "../../usecases/founders/createFounder.usecase";



// const deleteFounder = catchAsync(async (req: Request, res: Response) => {
//   const founder: string = req.params.id;
//   const createdFounder: Founder = await createFounderUsecase.createEmployee(founder)
//   res.status(200).json({
//     status: 'success',
//     data: createdFounder
//   })
// })



// export default deleteFounder