import './Contact.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import useContactForm from '../hooks/useContactForm';

const Contact = () => {
  const { values, handleChange, submitting, submitted, error, submit } = useContactForm();

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Private Contact" title="Direct channels for high-value guest conversations." copy="Combine inquiry forms, concierge contacts, maps, and WhatsApp-style touchpoints." />
        <div className="grid gap-6 lg:grid-cols-[1fr,.85fr]">
          <form className="glass-panel rounded-[2rem] p-8 text-white/72" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
                Name
                <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" name="name" onChange={handleChange} type="text" value={values.name} />
              </label>
              <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
                Email
                <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" name="email" onChange={handleChange} type="email" value={values.email} />
              </label>
              <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
                Phone
                <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" name="phone" onChange={handleChange} type="text" value={values.phone} />
              </label>
              <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
                Topic
                <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" name="topic" onChange={handleChange} value={values.topic}>
                  <option value="concierge">Concierge</option>
                  <option value="reservations">Reservations</option>
                  <option value="events">Events</option>
                  <option value="weddings">Weddings</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
              Message
              <textarea className="min-h-40 w-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-ivory outline-none" name="message" onChange={handleChange} value={values.message} />
            </label>
            {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
            {submitted ? <p className="mt-4 text-sm text-champagne">Your enquiry has been delivered to the guest relations team.</p> : null}
            <button className="mt-6 rounded-full bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-obsidian" disabled={submitting} type="submit">{submitting ? 'Sending...' : 'Send Enquiry'}</button>
          </form>
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8 text-white/72">
              <p className="eyebrow text-champagne/75">Guest Relations</p>
              <h3 className="display-heading mt-4 text-4xl text-ivory">A direct line to your on-property team.</h3>
              <div className="mt-5 space-y-3 text-sm leading-7">
                <p>reservations@aureliagrand.com</p>
                <p>+1 800 555 0199</p>
                <p>WhatsApp concierge available 24/7 for suite planning and airport coordination.</p>
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-8 text-white/72">
              <p className="eyebrow text-champagne/75">Visit</p>
              <p className="mt-4 text-sm leading-7">Monaco Riviera Waterfront<br />Private marina arrival available on request<br />Helipad transfers coordinated through concierge</p>
              <a className="mt-5 inline-flex rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white" href="https://wa.me/18005550199">Open WhatsApp</a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
