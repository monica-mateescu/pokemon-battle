export const verifyEmail = ({ name, url }: { name: string; url: string }) =>
  `<p>Hi ${name},</p>
    <p>
      Welcome to Pokémon Battle! Please confirm your email address to complete your registration:
      <a href="${url}">${url}</a>
    </p>
    <p>If you did not sign up for this account, please ignore this email.</p>
    <p>Best regards,<br/>Pokémon Battle Team</p>
  `;
