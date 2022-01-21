const Features = ({ children }) => {
  return (
    <section className="features">
      <h2 id="features-title" className="features__title">Our creations</h2>

      <a className="features__more" href="#features-title">See all</a>
    
      <div className="features__cards">
        { children }
      </div>
    </section>
  )
}

export default Features
