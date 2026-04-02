import './Blog.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import BlogGrid from '../components/blog/BlogGrid';
import BlogSidebar from '../components/blog/BlogSidebar';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { journalPosts, featuredArticle } from '../utils/pageContent';

const Blog = () => {
  usePageSeo(pageSeo.blog);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Editorial Journal" title="A luxury content layer that supports SEO and brand depth." copy="Publish destination stories, culinary notes, seasonal offers, and insider itineraries." />
        <div className="grid gap-6 xl:grid-cols-[1fr,20rem]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img alt={featuredArticle.title} className="h-80 w-full object-cover" src={journalPosts[0].image} />
              <div className="space-y-4 p-6 md:p-8 text-white/72">
                <p className="eyebrow text-champagne/75">Featured Story</p>
                <h2 className="display-heading text-5xl text-ivory">{featuredArticle.title}</h2>
                <p className="text-base leading-8">{featuredArticle.subtitle}</p>
              </div>
            </div>
            <BlogGrid posts={journalPosts} />
          </div>
          <div className="space-y-6">
            <BlogSidebar topics={featuredArticle.relatedTopics} />
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img alt={journalPosts[2].title} className="h-64 w-full object-cover" src={journalPosts[2].image} />
              <div className="space-y-3 p-6 text-white/72">
                <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">Journal Visual</p>
                <h3 className="display-heading text-3xl text-ivory">{journalPosts[2].title}</h3>
                <p className="text-sm leading-7">A supporting visual story block that keeps the right column balanced with the editorial grid.</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
