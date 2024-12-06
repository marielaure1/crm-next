export interface EmployeeProps{
    _id?: string;
    userId: string;
	lastName: string;
	firstName: string;
	notificationEmail?: boolean;
	createdAt: Date;
	updatedAt: Date;
}