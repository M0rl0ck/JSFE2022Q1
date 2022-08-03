import React from 'react';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">
        <FooterLink sociallink="https://github.com/M0rl0ck" img="./sprite.svg#github" />
        <FooterLink sociallink="https://rs.school/js/" img="./sprite.svg#logoRss" />
      </div>
    </footer>
  );
}
