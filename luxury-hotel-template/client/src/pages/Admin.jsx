import './Admin.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import useAdminDashboard from '../hooks/useAdminDashboard';

const Admin = () => {
  const { loading, error, dashboard, bookings, payments, reviews, reload } = useAdminDashboard();

  const metricCards = dashboard ? [
    { label: 'Revenue Projection', value: '$' + dashboard.revenueProjection.toLocaleString() },
    { label: 'Average Booking Value', value: '$' + dashboard.averageBookingValue.toLocaleString() },
    { label: 'Conversion Rate', value: dashboard.conversionRate + '%' },
    { label: 'Booking Requests Today', value: String(dashboard.bookingRequestsToday) }
  ] : [];

  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Operations Suite" title="Built-in admin dashboard for bookings, revenue, and guest signals." copy="This internal view turns the template into a practical hospitality operating surface rather than a static marketing shell." />
          <button className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white" onClick={reload} type="button">Refresh</button>
        </div>
        {loading ? <div className="glass-panel rounded-[2rem] p-8 text-white/70">Loading operations data...</div> : null}
        {error ? <div className="glass-panel rounded-[2rem] p-8 text-red-300">{error}</div> : null}
        {!loading && !error ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((card) => (
                <div className="glass-panel rounded-[1.75rem] p-6" key={card.label}>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{card.label}</p>
                  <p className="display-heading mt-4 text-4xl text-ivory">{card.value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 xl:grid-cols-[1.1fr,.9fr]">
              <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="display-heading text-3xl text-ivory">Recent Bookings</h2>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/45">{bookings.length} total</span>
                </div>
                <div className="mt-6 space-y-3">
                  {bookings.length ? bookings.slice(-5).reverse().map((booking) => (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={booking.id}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-ivory">{booking.guest?.name || 'Guest booking'}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{booking.selectedRoomId} • {booking.status}</p>
                        </div>
                        <p className="text-sm text-champagne">${booking.totalAmount}</p>
                      </div>
                    </div>
                  )) : <p className="text-sm text-white/65">No bookings have been recorded yet.</p>}
                </div>
              </div>
              <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                <h2 className="display-heading text-3xl text-ivory">Payments & Reviews</h2>
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Payments captured</p>
                    <p className="mt-2 text-3xl text-ivory">{payments.length}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Approved reviews</p>
                    <p className="mt-2 text-3xl text-ivory">{reviews.length}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
                    <p className="font-semibold text-ivory">Operations checklist</p>
                    <div className="mt-3 space-y-2">
                      <p>Review same-day arrivals and VIP notes.</p>
                      <p>Confirm deposit capture schedule.</p>
                      <p>Moderate new guest reviews before publish.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Container>
    </Section>
  );
};

export default Admin;
