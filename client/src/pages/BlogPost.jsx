import './BlogPost.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import PostContent from '../components/blog/PostContent';
import BlogSidebar from '../components/blog/BlogSidebar';
import Comments from '../components/blog/Comments';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { featuredArticle, sampleComments } from '../utils/pageContent';

const BlogPost = () => {
  usePageSeo(pageSeo.blogPost);

  return (
    <Section>
      <Container className="space-y-8">
        <div className="grid gap-6 xl:grid-cols-[1fr,20rem]">
          <div className="space-y-6">
            <PostContent article={featuredArticle} />
            <Comments items={sampleComments} />
          </div>
          <BlogSidebar topics={featuredArticle.relatedTopics} />
        </div>
      </Container>
    </Section>
  );
};

export default BlogPost;
