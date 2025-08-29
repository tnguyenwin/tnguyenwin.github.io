DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- MySQL | AUTO_INCREMENT
    image TEXT,
    date TEXT,
    title TEXT,
    tags TEXT,
    body TEXT
);

DELETE FROM posts;
DELETE FROM sqlite_sequence WHERE name='posts'; -- MySQL | ALTER TABLE posts AUTO_INCREMENT = 1;

INSERT INTO posts (image, date, title, tags, body)
VALUES
    -- #1 | New Personal Website
    ('/global/website.png', 'July 1st, 2025', 'New Personal Website', 'Announcement, Tips, Next.js, GitHub Pages', "I've finally created a portfolio website for myself! Hosting it on GitHub Pages was the easy part. Actually creating a website from scratch using Next.js was the hard part. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."),

    -- #2 | Free Website Builders
    ('/pages/blog/website_builders.jpg', 'July 2nd, 2025', 'Free Website Builders', 'Article, Framer, Wix, WordPress, Google Sites', "Often wonder which free website builder you should you? Here's a personal list of pros and cons I've compiled based on some of these site builders. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."),

    -- #3 | Is a College Education Worth it
    ('/pages/blog/tips_education.jpg', 'July 3rd, 2025', 'Is a College Education Worth it', 'Article, Tips', "Job requirements are insane now-of-days, especially for those newly starting in the technology industry. These days, minimum job requirements tend to require a bachelors degree or higher, even for low-level positions such as internships or entry-level positions where a candidate normally wouldn't have that type of education or experience. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."),

    -- #4 | 20 Common Resume Mistakes
    ('/pages/blog/tips_resume.jpg', 'July 4th, 2025', '20 Common Resume Mistakes', 'Article, Tips', 'How you can prevent the 20 common mistakes I most see in resumes. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #5 | 20 Common LinkedIn Mistakes
    ('/pages/blog/tips_linkedin.jpg', 'July 5th, 2025', '20 Common LinkedIn Mistakes', 'Article, Tips', 'How you can prevent the 20 common mistakes I most see on LinkedIn profiles. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #6 | Component Libraries & Portfolios
    ('/pages/blog/component_libraries.jpg', 'July 6th, 2025', 'Component Libraries & Portfolios', 'Article, Tips', 'Should you use component libraries in your portfolio or is it considered unprofessional? Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #7 | GitHub Pages Setup
    ('/pages/blog/github_pages.jpg', 'July 7th, 2025', 'GitHub Pages Setup', 'Tutorial, Hosting, GitHub Pages', 'A guide on how to setup GitHub Actions, Workflows, a site on GitHub Pages and more. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #8 | SmarterASP.net Setup
    ('/pages/blog/smarterasp_net.jpg', 'July 8th, 2025', 'SmarterASP.net Setup', 'Tutorial, Hosting, SmarterASP.net', 'A guide on how to setup a site on SmarterASP.net and more. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #9 | Free SmarterASP.net SSLs
    ('/pages/blog/smarterasp_net_free_ssl.jpg', 'July 9th, 2025', 'Free SmarterASP.net SSLs', 'Article, Hosting, SmarterASP.net', "Did you know you can request more than one free SSL certificate for free with a SmarterASP.net hosting plan? I didn't, until I accidentally stubbled upon a relatively easily workaround solution. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."),

    -- #10 | 3 Reasons to use Tailwind CSS
    ('/pages/blog/tailwind_css.jpg', 'July 10th, 2025', '3 Reasons to use Tailwind CSS', 'Article, CSS, Tailwind CSS', 'Why use Tailwind CSS? I often hear people ask this question. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.'),

    -- #11 | Top Companies Using Next.js
    ('/pages/blog/next_js_usage.jpg', 'July 11th, 2025', 'Top Companies Using Next.js', 'Article, Next.js', 'Did you know these companies used Next.js for making their website? Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.');

-- MySQL | SELECT * FROM posts;
