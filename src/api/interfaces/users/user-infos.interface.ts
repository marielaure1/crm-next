import { UserProps } from "@api/interfaces/users/user.interface";
import { EmployeeProps } from "@api/interfaces/users/employee.interface";

export interface UserInfosProps{
    user: UserProps;
    employee: EmployeeProps;
}