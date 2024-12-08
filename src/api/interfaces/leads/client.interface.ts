import { LeadProps } from "@api/interfaces/leads/lead.interface";

export interface ClientProps {
	_id?: string;
	lead: LeadProps;
    contractStartDate?: Date;
	contractEndDate?: Date;
	lastPurchaseDate?: Date;
	clientType?: string;
	totalRevenue?: number;
	createdAt?: Date;
	updatedAt?: Date;
}