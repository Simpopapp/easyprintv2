const MapSection = () => {
  return (
    <section className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0722138982363!2d-47.02865942484643!3d-22.87051543160867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c596e22ca4f7%3A0xaa4b498a5f6091c0!2sEasy%20Print%20-%20Impress%C3%A3o%20Digital!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Easy Print"
      ></iframe>
    </section>
  );
};

export default MapSection;
