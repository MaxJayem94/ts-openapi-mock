/**
 * Project Management API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CustomerMock } from './customer';
import { EmployeeMock } from './employee';


export interface ProjectMock { 
    id?: string;
    name: string;
    budget: number;
    startDate: string;
    industry: string;
    contact: EmployeeMock;
    customer: CustomerMock;
}

