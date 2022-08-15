function Arroyo () {
  return (
    <>
      <div class="arroyo">
          <div class="center">
            <h2>Arroyo</h2>
            <img alt="arroyo logo" src="images/spotlight/arroyographic_color.png" />
          </div>
          <div class="snippet">
            <p>Arroyo allows software engineers to query logs archived in cloud storage and conditionally reignest the matching logs back into their ELK stack.</p>
            <img src="images/portfolio/bulk_10fps.gif"></img>
          </div>
          <div class="snippet">
            <p>Arroyo automatically deploys and destroys the necessary AWS infrastructure to perform rehydration tasks. Once a rehydration job is complete, newly indexed logs are searchable in a user's Kibana dashboard.</p>
            <img src="images/portfolio/deploy.gif"></img>
          </div>
      </div>
    </>
  )
}

export default Arroyo;