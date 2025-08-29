'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionGeneric, { Row } from '../../components/Section';
import ScrollToTop from '../../components/ScrollToTop';

export default function Individual({ id }) {
    return (
        <>
            <Navbar />
            <main>
                <SectionGeneric>
                    <Row extraClasses='flex flex-col gap-4 items-center p-4'>
                        <h1 className='text-4xl font-black lg:text-5xl xl:text-7xl'>
                            {`ID: ${id}`}
                        </h1>
                    </Row>
                </SectionGeneric>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
