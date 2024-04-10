import sendConsultationEmail, { EmailRequest } from "@/api/api.sendemail";

export async function GET() {
	return Response.json({ message: 'GET request received' });
}

export async function POST(req: Request) {
	//email-post
	try {
		const body = await req.json() as EmailRequest;
		//send email
		const response = await sendConsultationEmail(body);
		return Response.json(response, { status: response.status ?? 200 });
	}
	catch (e) {
		return Response.json({ message: 'Local Request Failed.', status: 500 });
	}
}
