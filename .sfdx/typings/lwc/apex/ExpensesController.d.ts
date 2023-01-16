declare module "@salesforce/apex/ExpensesController.getExpenseReports" {
  export default function getExpenseReports(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/ExpensesController.getEmployeeList" {
  export default function getEmployeeList(): Promise<any>;
}
declare module "@salesforce/apex/ExpensesController.searchEmployees" {
  export default function searchEmployees(param: {searchTerm: any}): Promise<any>;
}
declare module "@salesforce/apex/ExpensesController.getExpenseItems" {
  export default function getExpenseItems(param: {reportId: any}): Promise<any>;
}
