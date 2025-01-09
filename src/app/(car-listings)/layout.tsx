import BgGlassmorphism from '@/components/BgGlassmorphism'
import React, { ReactNode } from 'react'
import SectionHeroArchivePage from '../(server-components)/SectionHeroArchivePage'
import heroRightImage from '@/images/hero-right-car.png'
import BackgroundSection from '@/components/BackgroundSection'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={`nc-ListingCarMapPage relative`}>
			<BgGlassmorphism />

			{/* SECTION HERO */}
			<div className="container pb-24 pt-10 lg:pb-28 lg:pt-16">
				<SectionHeroArchivePage
					rightImage={heroRightImage}
					currentPage="Cars"
					currentTab="Cars"
					listingType={
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width={24}
								height={24}
								color={'currentColor'}
								fill={'none'}
								className="h-5 w-5"
							>
								<path
									d="M22 15.4222V18.5C22 18.9659 22 19.1989 21.9239 19.3827C21.8224 19.6277 21.6277 19.8224 21.3827 19.9239C21.1989 20 20.9659 20 20.5 20C20.0341 20 19.8011 20 19.6173 19.9239C19.3723 19.8224 19.1776 19.6277 19.0761 19.3827C19 19.1989 19 18.9659 19 18.5C19 18.0341 19 17.8011 18.9239 17.6173C18.8224 17.3723 18.6277 17.1776 18.3827 17.0761C18.1989 17 17.9659 17 17.5 17H6.5C6.03406 17 5.80109 17 5.61732 17.0761C5.37229 17.1776 5.17761 17.3723 5.07612 17.6173C5 17.8011 5 18.0341 5 18.5C5 18.9659 5 19.1989 4.92388 19.3827C4.82239 19.6277 4.62771 19.8224 4.38268 19.9239C4.19891 20 3.96594 20 3.5 20C3.03406 20 2.80109 20 2.61732 19.9239C2.37229 19.8224 2.17761 19.6277 2.07612 19.3827C2 19.1989 2 18.9659 2 18.5V15.4222C2 14.22 2 13.6188 2.17163 13.052C2.34326 12.4851 2.67671 11.9849 3.3436 10.9846L4 10L4.96154 7.69231C5.70726 5.90257 6.08013 5.0077 6.8359 4.50385C7.59167 4 8.56112 4 10.5 4H13.5C15.4389 4 16.4083 4 17.1641 4.50385C17.9199 5.0077 18.2927 5.90257 19.0385 7.69231L20 10L20.6564 10.9846C21.3233 11.9849 21.6567 12.4851 21.8284 13.052C22 13.6188 22 14.22 22 15.4222Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 8.5L4 10L5.76114 10.4403C5.91978 10.4799 6.08269 10.5 6.24621 10.5H17.7538C17.9173 10.5 18.0802 10.4799 18.2389 10.4403L20 10L22 8.5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M18 14V14.01"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M6 14V14.01"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="ml-2.5">1512 cars</span>
						</>
					}
				/>
			</div>

			{/* SECTION */}
			{children}

			<div className="container overflow-hidden">
				{/* SECTION 1 */}
				<div className="relative py-16">
					<BackgroundSection />
					<SectionSliderNewCategories
						heading="Explore by types of stays"
						subHeading="Explore houses based on 10 types of stays"
						categoryCardType="card5"
						itemPerRow={5}
						sliderStyle="style2"
					/>
				</div>

				{/* SECTION */}
				<SectionSubscribe2 className="py-24 lg:py-28" />

				{/* SECTION */}
				<div className="relative mb-24 py-16 lg:mb-28">
					<BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20" />
					<SectionGridAuthorBox />
				</div>
			</div>
		</div>
	)
}

export default Layout
