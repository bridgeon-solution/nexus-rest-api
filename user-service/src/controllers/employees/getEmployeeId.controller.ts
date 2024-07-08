import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import getEmployeeUsecase from "../../usecases/employees/getEmployee.usecase";
import messageBroker from "../../utils/messageBroker";
import getEmployeeBrokerUsecase from "../../usecases/employees/getEmployeeBroker.usecase";


const getEmployeeById = catchAsync(async (req: Request, res: Response) => {
  const employee: string = req.params.id;
  const employeeId: number = parseInt(employee)
  const getEmployeeById: Employee = await getEmployeeUsecase.getEmployeeById(employeeId)
  res.status(200).json({
    status: 'success',
    data: getEmployeeById
  })
})


const listenForEmployeeInfo = async () => {
  await messageBroker.consumeMessage("getEmployees", async (data) => {
    await getEmployeeBrokerUsecase.getAllEmployees()
    //await getEmployeeBrokerUsecase.getEmployeeId(data)
  })
};
const listenForEmployeeInfoById = async () => {
  await messageBroker.consumeMessage("getEmployeeById", async (data) => {
    let id: number = Number(data);
    await getEmployeeBrokerUsecase.getEmployeeId(id);
  })
};
const listenForEmployeeInfoByTeam = async () => {
  await messageBroker.consumeMessage("members", async (data) => {
    await getEmployeeBrokerUsecase.getTeamMeambers(data);
  })
};



export { getEmployeeById, listenForEmployeeInfo, listenForEmployeeInfoById, listenForEmployeeInfoByTeam };


