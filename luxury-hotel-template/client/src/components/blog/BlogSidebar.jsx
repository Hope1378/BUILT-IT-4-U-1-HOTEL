import './BlogSidebar.css';

const BlogSidebar = ({ topics }) => {
  return (
    <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white/72 md:p-7">
      <h3 className="display-heading text-3xl text-ivory">Topics</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]" key={topic}>{topic}</span>
        ))}
      </div>
      <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-champagne/75">Editorial Focus</p>
          <p className="mt-2 text-sm leading-6">This journal supports organic discovery, brand authority, and stronger pre-booking engagement.</p>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Best Performing Themes</p>
            <p className="mt-2 text-sm leading-6 text-white/72">Arrival, dining, and wellness stories consistently drive deeper session time.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Publishing Cadence</p>
            <p className="mt-2 text-sm leading-6 text-white/72">A monthly mix of destination, culinary, and service stories keeps the journal active without diluting tone.</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
