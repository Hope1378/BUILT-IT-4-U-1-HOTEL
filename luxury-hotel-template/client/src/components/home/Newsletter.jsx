import { useState } from 'react';
import Container from '../common/Container';
import Section from '../common/Section';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { subscribeToNewsletter } from '../../services/emailService';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await subscribeToNewsletter({ email });
    setSubmitted(true);
  };

  return (
    <Section>
      <Container>
        <GlassCard className="grid gap-8 lg:grid-cols-[1fr,.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-champagne/80">Private Access</p>
            <h2 className="display-heading mt-4 text-5xl text-ivory">Invite guests into a quieter, more valuable email journey.</h2>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
            <input className="min-h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-white outline-none" onChange={(event) => setEmail(event.target.value)} placeholder="Email address" type="email" value={email} />
            <Button type="submit">{submitted ? 'Subscribed' : 'Join List'}</Button>
          </form>
        </GlassCard>
      </Container>
    </Section>
  );
};

export default Newsletter;
