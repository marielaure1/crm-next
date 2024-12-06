export interface LeadProps {
	name: string;
	email?: string;
	phone?: string;
	addressLine1?: string;
	addressLine2?: string;
	city?: string;
	state?: string;
	zipCode?: string;
	country?: string;
	notes?: string;
	source?: string;
	lastContactDate?: Date;
	mainContactId?: string;
	managerContactId? : string;
}