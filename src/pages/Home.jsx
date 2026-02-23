import { useState, useEffect } from "react"
export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [githubData, setGithubData] = useState(null)
  return (
        <>
      {/* HERO */}
      <section style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        paddingTop: "50px"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)"
        }}></div>

        <div style={{position: "relative", zIndex: 1}}>
          <h1 className="text-white display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="text-white">Développeur web full stack</h2>
          <button className="btn btn-danger mt-3 px-4">
            En savoir plus
          </button>
        </div>
      </section>

      {/* a propos */}
      <section className="container my-5">
        <div className="row">

          {/* colonne gauche a propos*/}

          <div className="col-md-6">
            <h2>A propos</h2>
            <hr />
            <img src="/images/john-doe-about.jpg" alt="John Doe" className="img-fluid mb-3" />
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>

          </div>



        </div>

      </section>
    </>
  )
}
