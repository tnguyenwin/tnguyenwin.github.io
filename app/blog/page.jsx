import { database } from './database';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import BlogModal from '../components/BlogModal';
import BlogPostMain from '../components/BlogPost';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default async function Blog() {
    const db = await database();
    const posts = await db.all('SELECT * FROM posts;');

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main className='relative'>
                <BlogModal />
                <SectionGeneric
                    extraClasses='lg:py-16'
                    hasViewportHeight={false}>
                    <Row extraClasses='flex flex-col gap-4 lg:gap-12 items-center size-full'>
                        <div className='grid size-full gap-4 lg:grid-cols-2 xl:grid-cols-3'>
                            {posts.reverse().map(post => (
                                <BlogPostMain
                                    key={post.id}
                                    id={post.id}
                                    image={post.image}
                                    date={post.date}
                                    title={post.title}
                                    tags={post.tags}
                                    body={post.body}
                                />
                            ))}
                        </div>
                        <p
                            className={`mx-auto border-s-3 ps-3 text-[10px] lg:mx-0 lg:mt-2 lg:text-sm`}>
                            Posted content&nbsp;&nbsp;&nbsp;→
                            &nbsp;&nbsp;Subject to change over time
                        </p>
                    </Row>
                </SectionGeneric>
            </main>
            {/* Footer */}
            <Footer />
            {/* Scroll To Top */}
            <ScrollToTop />
        </>
    );
}
