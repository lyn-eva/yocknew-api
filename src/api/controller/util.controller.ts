import { Response, CookieOptions } from 'express';

export const cookieOptions: CookieOptions = { httpOnly: true, secure: false, sameSite: 'none' };

export function createCookie(res: Response, token: string) {
  return res.cookie('yocknew-token', JSON.stringify({ token }), cookieOptions);
}

export function respondCreated(res: Response) {
  return res
    .status(201)
    .json({
      status: 201,
      message:
        "Account created! Please check your email to confirm your registeration. Check your spam foldler if you don't see one",
    })
    .end();
}

export function respondConflict(res: Response) {
  return res
    .status(409)
    .json({
      status: 409,
      message: 'An account is already registered with this email',
    })
    .end();
}

export function respondInvalidToken(res: Response, msg: string) {
  return res.status(400).json({ status: 400, msg }).end();
}

export function respondConfirmed(res: Response) {
  return res
    .status(200)
    .json({ status: 200, msg: 'Your account registration is succefully confirmed' })
    .end();
}

export function respondAlreadyConfirmed(res: Response) {
  return res.status(403).json({ status: 403, msg: 'This account is already confirmed' }).end();
}
