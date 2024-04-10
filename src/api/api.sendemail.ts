import { API } from './api.request';
import axios from 'axios';

export type EmailRequest = {
	user_name: string;
	user_email: string;
	user_number: string;
	user_message: string;
	user_services: string[];
};

const sendConsultationEmail = async (request: EmailRequest) => {
	const response = await API.post('/public/send-consultation', request);
	return response;
}

sendConsultationEmail.client = (request: EmailRequest) => {
	const response = axios.post('/api/', request);
	return response;
}

export default sendConsultationEmail;


