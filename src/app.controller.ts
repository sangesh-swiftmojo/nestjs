import { Controller, Request, Post, UseGuards, Response } from '@nestjs/common';
import { Get } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Get('auth/logout')
  logout(@Request() req, @Response() res) {
    req.logout((err) => {
      if (err) {
        return res.status(500).send({ message: 'Logout failed', error: err });
      }
      res.redirect('/'); // or any other response you want to send
    });
  }


// @UseGuards(LocalAuthGuard)
// @Post('auth/logout')
// async logout(@Request() req) {
//   return req.logout();
// }

}
