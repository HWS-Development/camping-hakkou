const items = [
    { title: 'Homemade Breakfast', desc: 'Fresh msemen, local honey, and seasonal fruits served in the courtyard.', icon: 'breakfast' },
    { title: 'Fast Wi-Fi', desc: 'Stream, work, or video chat with reliable coverage throughout the riad.', icon: 'wifi' },
    { title: 'Plunge Pool', desc: 'Cool off after a day in the medina under the orange trees.', icon: 'pool' },
    { title: 'Airport Transfers', desc: 'Hassle-free pickup and drop-off arranged on request.', icon: 'transfer' },
    { title: 'Rooftop Terrace', desc: 'Sunset tea with city views and cozy seating areas.', icon: 'terrace' },
    { title: 'Local Concierge', desc: 'Tours, hammams, and dining—personalized recommendations.', icon: 'concierge' },
  ]
  
  function Icon({name, className="h-6 w-6"}) {
    // simple inline SVGs keyed by name
    if (name === 'breakfast') return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M7 6v8a5 5 0 1 0 10 0V6"/></svg>
    )
    if (name === 'wifi') return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 16.5a3.5 3.5 0 1 1 7 0m-10-4a8 8 0 0 1 13 0m-16-4a12 12 0 0 1 19 0"/></svg>
    )
    if (name === 'pool') return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 18c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M3 14c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0"/></svg>
    )
    if (name === 'transfer') return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 7 5-5 5 5M8 2v13m13 5-5 5-5-5m5 5V9"/></svg>
    )
    if (name === 'terrace') return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16M6 6h12M3 18h18M8 12v6m8-6v6"/></svg>
    )
    // concierge
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-8 11a8 8 0 1 1 16 0H4Z"/></svg>
    )
  }
  
  export default function Amenities() {
    return (
      <section id="amenities" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Amenities</h2>
            <p className="mt-2 text-brand-black/70">Thoughtful touches to make your stay effortless.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(i => (
              <div key={i.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-brand-orange">
                    <Icon name={i.icon} />
                  </span>
                  <h3 className="font-semibold">{i.title}</h3>
                </div>
                <p className="mt-3 text-sm text-brand-black/70">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  