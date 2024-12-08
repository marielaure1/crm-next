export interface ResponseApi {
    code: number;
    data: Array<any>
    message: string;
    success: boolean;
}

export interface ResponseApiError {
    code: number;
    data: Array<any>
    error: string;
}