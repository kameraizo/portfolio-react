export default function Portfolio() {
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
        <h1>Portfolio</h1>
         <p>Voici quelques-unes de mes réalisations</p>
         <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>
      {/*cards*/}
      <div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>
        <div className="row">
          {/*card 1*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/fresh-food.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">Fresh food</h2>
                <p className="card-text">
                  site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec PHP ET MySQL
                </small>

              </div>
            </div>
          </div>
          {/*card 2*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/restaurant-japonais.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">Restaurant Akira</h2>
                <p className="card-text">
                  site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec WordPress
                </small>
              </div>
            </div>
          </div>
          {/*card 3*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/espace-bien-etre.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">Espace bien-etre</h2>
                <p className="card-text">
                  site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec LARAVEL
                </small>
              </div>
            </div>
          </div>
          {/*card 4*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/seo.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">SEO</h2>
                <p className="card-text">
                  Amelioration du referencement d'un 
                  site e-commerce
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec SEO
                </small>
              </div>
            </div>
          </div>
          {/*card 5*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/coder.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">Creation d'une API</h2>
                <p className="card-text">
                  Creation d'une API RESTFULL publique
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec SYMFONY
                </small>
              </div>
            </div>
          </div>
          {/*card 6*/}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
              src="/images/screens.jpg"
              className="card-img-top"
              alt="Fresh food" 
              />
              <div className="card-body text-center">
                <h2 className="card-title">Maquette d'un site web</h2>
                <p className="card-text">
                  creation d'un prototype d'un site
                </p>
                <a href="#" className="btn btn-primary">
                  voir le site
                </a>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">
                  Sites realiser avec FIGMA
                </small>

              </div>

            </div>
          </div>


        </div>
      </div>
    </div> 
    ) 
}