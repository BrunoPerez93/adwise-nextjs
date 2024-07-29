import { sendMail } from "@/utils/sendEmail";

export async function POST(req) {
  try {
    const { InputName, InputEmail, InputMessage } = await req.json();

    await sendMail(
      "Thanks, we will contact you soon.", 
      "deinsamarketing@gmail.com", 
      `Name: ${InputName}\nMessage: ${InputMessage}`, 
      InputEmail 
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error in API route:', err);
    return new Response(JSON.stringify({
      error_code: "api_one",
      message: err.message,
    }), { status: 400 });
  }
}
