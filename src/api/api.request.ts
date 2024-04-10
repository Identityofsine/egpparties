import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export namespace API {
	const BASE_URL = "http://localhost:1069";

	export async function get<A = any>(params: string, header: Partial<RawAxiosRequestHeaders> = {}, config: Partial<AxiosRequestConfig> = {}): Promise<A> {

		header = { ...header, 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
		let error_code = 0;
		const response = await axios.get(BASE_URL + params, { headers: header, ...config })
			.catch((e: AxiosError) => { error_code = e?.response?.status ?? 500; return { status: e?.response?.status as number ?? 500, message: e?.response?.data as string ?? "Unknown Error Has Occured" } });

		//check if property is definied 
		return (response as AxiosResponse).data as A;
	}

	export async function post<A = any>(params: string, data: any, header: Partial<RawAxiosRequestHeaders> = {}, config: Partial<AxiosRequestConfig> = {}): Promise<A> {
		let error_code = 0;
		const response = await axios.post(BASE_URL + params, data, { headers: header, ...config })
			.catch((e: AxiosError) => { error_code = e?.response?.status ?? 500; return { data: { status: e?.response?.status as number ?? 500, message: e?.response?.data as string ?? "Unknown Error Has Occured" } } });
		return (response as AxiosResponse).data as A;
	}
}
