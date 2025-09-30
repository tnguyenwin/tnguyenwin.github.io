import { styleTemplates } from '../../../globals';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SectionGeneric, { Row } from '../../../components/Section';
import Link from '../../../components/Link';
import { BlogPostIndividual } from '../../../components/BlogPost';
import ScrollToTop from '../../../components/ScrollToTop';
import { database } from '../../database';

export default async function ClientPage({ id }) {
    const db = await database();
    const [post] = await db.all(`SELECT * FROM posts WHERE id = ${id};`);

    return (
        <>
            <Navbar />
            <div className='container mx-auto p-4'>
                <ul className='flex items-center'>
                    <Link
                        href={`/`}
                        body='Home'
                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                    />
                    <li>/</li>
                    <Link
                        href={`/blog`}
                        body='Blog'
                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                    />
                    <li>/</li>
                    <Link
                        isNavLink={false}
                        href={`/blog/${post.id}`}
                        body={post.id}
                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                    />
                </ul>
            </div>
            <main>
                <SectionGeneric extraClasses='items-start justify-start h-auto lg:h-auto'>
                    {/* <Row extraClasses='flex flex-col size-full'> */}
                    <BlogPostIndividual
                        key={post.id}
                        id={post.id}
                        image={post.image}
                        date={post.date}
                        title={post.title}
                        tags={post.tags}
                        body={post.body}
                    />
                    {/* </Row> */}
                </SectionGeneric>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
