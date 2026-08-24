import Image from 'next/image';
import salutarLogo from '@/app/logo-sem-fundo.png';

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = '' }: BrandMarkProps) {
  return <Image className={className} src={salutarLogo} alt="" aria-hidden="true" />;
}
