import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req: Request) {
    // Guard will redirect
  }

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    // Here, the user is authenticated.
    // You would typically generate a JWT and send it back to the client,
    // or redirect them to the frontend with a session.
    // For now, we'll just send back the user object.

    // In a real app, you would redirect to your frontend application
    // res.redirect('http://localhost:3001/dashboard');
    res.status(200).json(req.user);
  }
}
