const emailTemplate =
  `
<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif; background-color: #f5f5f5; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 40px;">
<h1 style="font-size: 32px; font-weight: bold; color: #007bff; text-align: center; margin: 0;">¡Hola Super Admin!</h1>
<p style="font-size: 18px; margin-top: 32px; margin-bottom: 48px; text-align: center; line-height: 1.5;">
  Tu cuenta ha sido bloqueada por motivos de seguridad. Para poder recuperarla, necesitas utilizar el siguiente código de verificación:
</p>
<div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; padding: 32px;">
  <h2 style="font-size: 48px; font-weight: bold; color: #007bff; margin: 0;">{{code}}</h2>
</div>
<h3 style="font-size: 18px; margin: 30px 0px; text-align: center; line-height: 1.5;">
  Tu codigo expirará en dos horas. 
</h3>
<p style="font-size: 18px; margin-top: 48px; margin-bottom: 32px; text-align: center; line-height: 1.5;">
  Recuerda no compartir este código con nadie. Utilízalo únicamente para recuperar el acceso a tu cuenta.
</p>
<p style="font-size: 18px; margin-top: 48px; margin-bottom: 32px; text-align: center; line-height: 1.5;">
  Si tienes algún problema o duda, por favor contacta al equipo de desarrollo
</p>
<p style="font-size: 16px; text-align: center; margin-top: 24px;">¡Gracias!</p>
<i style="font-size: 16px; text-align: center;"Este email fue generado automaticamente</i>
</div>
`;

module.exports = emailTemplate;