import BlogCard from './BlogCard';
import './BlogGrid.css';

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
    </div>
  );
};

export default BlogGrid;
