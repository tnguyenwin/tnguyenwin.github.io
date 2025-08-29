import { styleDefaults, styleTemplates } from '../globals';
import { database } from './database';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import BlogPostMain from '../components/BlogPost';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default async function Blog() {
    const db = await database();
    const posts = await db.all('SELECT * FROM posts;');
    // const [count] = await db.all('SELECT COUNT(*) length FROM posts;');
    // const Tab = () => {
    //     return (
    //         <li
    //             // key={id}
    //             className={`${true ? 'lg:p-4 lg:pe-0' : 'lg:p-4 lg:pb-0'}`}>
    //             <button
    //                 className={`flex !w-full gap-2 whitespace-nowrap ${
    //                     true
    //                         ? true === true
    //                             ? styleTemplates.buttonPrimary
    //                             : styleTemplates.buttonSecondary
    //                         : true === true
    //                           ? styleTemplates.buttonPrimary
    //                           : styleTemplates.buttonSecondary
    //                 } cursor-pointer`}
    //                 // onClick={handleTab}
    //             >
    //                 abc
    //                 {/* {title} */}
    //             </button>
    //         </li>
    //     );
    // };

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <SectionGeneric
                    extraClasses='p-4 lg:p-16'
                    hasViewportHeight={false}>
                    <Row extraClasses='flex flex-col gap-4 lg:gap-12 items-center size-full'>
                        {/* <h1 className='text-4xl font-black lg:text-5xl lg:text-7xl'>
                            MY POSTS
                        </h1> */}
                        {/* <div className='flex w-full flex-col gap-4'> */}
                        {/* Tabs - Top/Right */}
                        {/* <ul
                                className={`${styleDefaults.backgroundColor} justify-center gap-2 shadow-md lg:gap-0 dark:shadow-lg ${styleDefaults.shadowColor} ${styleDefaults.borderColor} flex w-full flex-col flex-wrap lg:flex-row lg:rounded-[0.5vw] lg:border [&>*:nth-last-child(1)]:pe-4`}> */}
                        {/* {tabsData.map((t, i) => (
                                    <Tab
                                        key={i}
                                        id={i}
                                        isCategory
                                        title={t.category}
                                    />
                                ))} */}
                        {/* {count.length}
                            </ul>
                        </div> */}
                        <div className='grid size-full gap-4 lg:grid-cols-3'>
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
