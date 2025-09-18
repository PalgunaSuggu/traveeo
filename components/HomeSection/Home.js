import React from 'react'
import Banner from './Banner/Banner'
import { WhyWithUs } from './WhyWithUs/WhyWithUs'
import { Testimonials } from './Testimonials/Testimonials'
import Upcomingtrips from './UpcomingTrips/Upcomingtrips'
import HowToPlan from './HowToPlan/HowToPlan'
import ContactHome from './Contact/Contact'
import HomeBlogs from './HomeBlogs/HomeBlogs'
import Trips from './Trips/Trips'


const Home = () => {
    return (
        <div>
            <Banner />
            <Trips />
            <Upcomingtrips />
            <HowToPlan />
            <Testimonials />
            <HomeBlogs />
            <ContactHome />
            <WhyWithUs />
        </div>
    )
}

export default Home