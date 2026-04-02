import './PostContent.css';

const PostContent = ({ article }) => {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 text-white/72">
      <h1 className="display-heading text-5xl text-ivory md:text-6xl">{article.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">{article.subtitle}</p>
      <div className="my-8 h-px bg-white/10" />
      <div className="space-y-6 text-base leading-8">
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <blockquote className="mt-8 rounded-[1.5rem] border border-champagne/25 bg-champagne/10 p-6 text-2xl text-ivory">
        {article.pullQuote}
      </blockquote>
    </article>
  );
};

export default PostContent;
