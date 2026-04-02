import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <img alt={post.title} className="h-64 w-full object-cover" src={post.image} />
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">{post.category}</p>
        <h3 className="display-heading text-4xl text-ivory">{post.title}</h3>
        <p className="text-sm leading-7 text-white/72">{post.excerpt}</p>
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/45">
          <span>{post.readTime}</span>
          <Link className="text-champagne" to={post.slug === 'the-art-of-arrival' ? '/blog/the-art-of-arrival' : '/blog'}>Read Story</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
