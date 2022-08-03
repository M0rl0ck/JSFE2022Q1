import React from 'react';
import IFooterLink from '../infostructure/IFooterLink';

export default function FooterLink({ sociallink, img }: IFooterLink) {
  return (
    <div className="footer__link">
      <a href={sociallink}>
        <p>Sergey Sergeev</p>
        <svg>
          <use xlinkHref={img} />
        </svg>
      </a>
    </div>
  );
}
