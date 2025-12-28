import { Resend } from 'resend';

const resend = new Resend('re_269pgWj6_6EDFoKEGe692bpPEPYo6T6Dd');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'kasra.garshasbi8585@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});