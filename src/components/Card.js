const Card = ({ title }) => {  
  const backgroundImageClass = title.toLowerCase().replace(/\s/g, '-');
  return (
    <div className={`features__card ${backgroundImageClass}`}>
      <div className="transparent-card">
        <h3 className={`features__card-title`}>{title}</h3>
      </div>
    </div>
  )
}

export default Card