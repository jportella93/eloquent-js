'use client';

import Image from 'next/image';

import Link from 'next/link';
import CustomButton from './CustomButton';

export type ChapterCardProps = {
  title: string;
  subtitle: string;
  image: string;
  exercises: string;
  link: string;
};

const ChapterCard = ({
  title,
  subtitle,
  image,
  exercises,
  link,
}: ChapterCardProps) => {
  return (
    <div className='chapter-card group'>
      <div className='chapter-card__content'>
        <h2 className='chapter-card__content-title'>{title}</h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          {subtitle}
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={image}
          alt='chapter image'
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <span className='self-end text-[14px] leading-[17px] font-medium'>
              {exercises}
            </span>
          </div>
        </div>

        <Link href={link} className='chapter-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-[#B2980B]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
          />
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
