import React from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';
import IconStar from '../../components/icons/arrow-star';
import Heading from '../../components/motions/Heading';
import Parallax from '../../components/motions/Parallax';
import { motion } from 'framer-motion';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { maxMobileWidth } from '../../constants/breakpoints';

const CustomerReviews = ({ slice }) => {
    const backgroundColors = ['blue-200', 'yellow-50', 'green-100', 'red-100'];

    const windowDimensions = useWindowDimensions();

    return (
        <section id={ slice.primary.section_id }>
            <div className="px-6 max-w-screen-xl mx-auto">
                <div className="px-6 md:py-24 pt-8">
                    <header className="max-w-screen-xl mx-auto">
                        <Heading className="mb-8 text-center">{ slice.primary.title }</Heading>
                    </header>
                </div>
                <div>
                    <ul className="grid md:grid-cols-12 md:grid-rows-6 md:gap-x-8 md:gap-y-28">
                        { slice.items.map((review, index) => {
                            const bgColor = backgroundColors[index % backgroundColors.length];
                            const parallaxAmount = windowDimensions.width < maxMobileWidth ? 0 : index % 5 === 0
                                ? 0 : index % 5 === 1
                                    ? -30 : index % 5 === 2
                                        ? 40 : index % 5 === 3
                                            ? 60 : index % 5 === 4
                                                ? 0 : 1;
                            return (
                                <motion.li key={ index }
                                           whileHover={{ scale: 1.05, }} transition={{ type: "spring", stiffness: 400, damping: 10, restSpeed: 0, restDelta: 0.1 }}
                                    className="md:row-span-2 md:col-span-6
                                        md:[&:nth-child(5n+1)]:col-start-1 md:[&:nth-child(5n+1)]:row-start-1
                                        md:[&:nth-child(5n+2)]:col-start-8 md:[&:nth-child(5n+2)]:row-start-1
                                        md:[&:nth-child(5n+3)]:col-start-4 md:[&:nth-child(5n+3)]:row-start-2
                                        md:[&:nth-child(5n+4)]:col-start-2 md:[&:nth-child(5n+4)]:row-start-4
                                        md:[&:nth-child(5n+5)]:col-start-7 md:[&:nth-child(5n+5)]:row-start-3
                                    ">
                                    <Parallax distance={ windowDimensions.width > maxMobileWidth ? parallaxAmount : index * -30 } flatDistance offset={['start end', 'start center']}>
                                        <PrismicLink
                                            className={ `h-full drop-shadow-xl block rounded-3xl p-6 md:p-10 bg-${ bgColor }` }
                                            field={ review.review_link }>
                                            <header className="flex items-start">
                                                <PrismicNextImage className="w-9 h-9 md:w-14 md:h-14 object-cover rounded-lg"
                                                                  field={ review.customer_image }
                                                                  width={ 52 } height={ 52 }
                                                                  imgixParams={ { fit: 'crop', w: 52, h: 52 } } alt=""/>
                                                <div className="ml-4">
                                                    <span className="text-[0.9rem] md:text-[1.2rem] font-bold">{ review.customer_name }</span>
                                                    <div className="flex mt-1">
                                                        { Array(review.stars).fill().map((_, i) => (
                                                            <IconStar className="w-2 h-2 md:w-auto md:h-auto" key={ i }/>
                                                        )) }
                                                    </div>
                                                </div>
                                                <span className="ml-auto text-[0.8rem] md:text-base italic">{ review.platform_name }</span>
                                            </header>
                                            <div className="mt-4 md:mt-5">
                                                <p className="text-justify text-[0.7rem] md:text-base">{ review.review_text }</p>
                                            </div>
                                        </PrismicLink>
                                    </Parallax>
                                </motion.li>
                            );
                        }) }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
