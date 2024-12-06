import { UserRoleEnum } from "@enums/user-role.enum";
import { UserStatusEnum } from "@enums/user-status.enum";

export interface UserProps{
    _id?: string;
    email: string;
	password?: string;
	role?: UserRoleEnum;
	isActive?: boolean;
	isVerified?: boolean;
	lastConnection?: Date;
	status?: UserStatusEnum;
	googleId?: string;
	createdAt: Date;
	updatedAt: Date;
}