export * from './customer.service';
import { CustomerMockService } from './customer.service';
export * from './employee.service';
import { EmployeeMockService } from './employee.service';
export * from './project.service';
import { ProjectMockService } from './project.service';
export const APIS = [CustomerMockService, EmployeeMockService, ProjectMockService];
