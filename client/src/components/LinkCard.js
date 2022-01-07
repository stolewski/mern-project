import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        Your link:
        <a href={link.to} target='_blank' rel='noreferrer noopener'>
          {' '}
          {link.to}
        </a>
      </p>
      <p>
        From:
        <a href={link.from} target='_blank' rel='noreferrer noopener'>
          {' '}
          {link.from}
        </a>
      </p>
      <p>
        Number of clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date of creation:{' '}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkCard;
