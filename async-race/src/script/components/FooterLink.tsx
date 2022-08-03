import React from 'react';
import IFooterLink from '../infostructure/IFooterLink';

export default function FooterLink({ sociallink, img, title }: IFooterLink) {
  return (
    <div className="footer__link">
      <a href={sociallink}>
        {title ? <p>{title}</p> : null}
        <svg>
          <use xlinkHref={img} />
        </svg>
      </a>
    </div>
  );
}
