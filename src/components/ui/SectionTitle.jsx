function SectionTitle({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2
        className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
          light ? 'text-white' : 'text-primary-800'
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 bg-green-500 rounded-full mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-lg ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
