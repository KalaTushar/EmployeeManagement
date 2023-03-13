export interface IEmployee{
    employeeId: number;
    employeeName: string;
    role: string;
    skills: string;
    division: string;
    gender: string;
    employeeType: string;
}
export interface ICreateEmployee{
    employeeName: string;
    role: string;
    skills: string;
    division: string;
    gender: string;
    employeeType: string;
}