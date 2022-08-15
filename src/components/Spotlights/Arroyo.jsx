function Arroyo () {
  return (
    <>
      <div class="arroyo">
          <div class="center">
            <img alt="arroyo logo" src="images/spotlight/arroyologo_color_dark_bg.svg" />
          </div>
          <div class="snippet">
            <p>Arroyo allows software engineers to query logs archived in cloud storage and conditionally reignest the matching logs back into their ELK stack.</p>
            <img alt="Arroyo User Interface" src="images/portfolio/bulk_10fps.gif"></img>
          </div>
          <div class="snippet">
            <p>Arroyo automatically deploys and destroys the necessary AWS infrastructure to perform rehydration tasks. Once a rehydration job is complete, newly indexed logs are searchable in a user's Kibana dashboard.</p>
            <img alt="Arroyo Deployment Script" src="images/portfolio/deploy.gif"></img>
          </div>
          <a rel="noreferrer" target="_blank" href="https://www.arroyoframework.com/case-study.html" className="btn btn-border-light btn-lg">Learn More</a>
      </div>
    </>
  )
}

export default Arroyo;