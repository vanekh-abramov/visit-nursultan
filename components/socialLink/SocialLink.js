import classes from './SocialLink.module.css';
import Link from 'next/link';
import Image from 'next/image';

const SocialLink = ({ href, src }) => {
  return (
    <Link className={classes.social_link} href={href}>
      <Image src={src} alt='image' width={21} height={21} />
    </Link>
  );
};

export default SocialLink;
