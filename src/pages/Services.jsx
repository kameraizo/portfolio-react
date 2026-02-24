export default function Services() {
  return (
  <div style={{paddingTop: "56px"}}>
    {/*banner*/}
    <section style={{
      backgroundImage: "url('/images/banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",}}>
    </section>
    {/*titre*/}
      <div style={{textAlign: "center",color: "black" }}>
        <h1>Mon offre de services</h1>
         <p>Voici les prestations sur les quelles
          je peux intervenir
         </p>
         <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>
      {/*cards*/}
<div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>   
  <div className="row">
    <div className="col-md-4"> 
      <div className="card h-100 shadow-sm text-center">
        <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-brush fs-1 text-primary"></i>
              </div>
                <h2 className="card-title">UX Design</h2>
                <p className="card-text">
                  Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
                </p>
        </div>
      </div>
    </div>
        <div className=" col-md-4"> 
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-code-slash fs-1 text-primary"></i>
              </div>
                <h2 className="card-title">Developpement web</h2>
                <p className="card-text">
                  Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"> 
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-search fs-1 text-primary"></i>
              </div>
                <h2 className="card-title">Référencement</h2>
                <p className="card-text">
                  Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
                </p>
            </div>
          </div>
        </div>
  </div>
</div> 
  </div>

  ) 
}