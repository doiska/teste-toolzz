import { env } from "hono/adapter";

export async function validateCaptcha(captcha: string, secret: string){
  const formData = new FormData();

  formData.append("secret", secret);
  formData.append("response", captcha);

  console.log(`https://challenges.cloudflare.com/turnstile/v0/siteverify?secret=${secret}&response=${captcha}`);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    })

    const data = await response.json();

    return !!data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
}
