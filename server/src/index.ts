import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";
import { validateCaptcha } from "./lib/captcha";
import { env } from "hono/adapter";

const login = {
  username: 'demo',
  password: '123456',
}

const app = new Hono()

app.use(cors())

app.get('/health', async (c) => {
  return c.json({ status: "ok" }, 200)
});

app.post('/auth/login', async (c) => {
  const { username, password, rememberMe, captcha } = await c.req.json();

  if(!captcha) {
    return c.json({
      status: "error",
      message: "O campo captcha não foi preenchido."
    }, 400);
  }

  if(!await validateCaptcha(captcha, env<{ CAPTCHA_SECRET: string }>(c).CAPTCHA_SECRET)) {
    return c.json({
      status: "error",
      message: "O captcha não é válido."
    }, 400);
  }

  if (username === login.username && password === login.password) {
    return c.json({ status: "success" }, 200)
  }

  return c.json({
    status: "error",
    message: "Usuário ou senha inválidos"
  }, 401)
})

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
})
