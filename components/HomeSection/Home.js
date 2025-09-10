import React from 'react'
import Banner from './Banner/Banner'
import { WhyWithUs } from './WhyWithUs/WhyWithUs'
import { Testimonials } from './Testimonials/Testimonials'
import Upcomingtrips from './UpcomingTrips/Upcomingtrips'
import HowToPlan from './HowToPlan/HowToPlan'


const Home = () => {
    return (
        <div>
            <Banner />
            <WhyWithUs />
            <HowToPlan />
            <Testimonials />
            <Upcomingtrips />
        </div>
    )
}

export default Home