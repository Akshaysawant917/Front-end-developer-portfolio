
import boy from "../assets/boylaptop.png";
import '../styles/app.css'
function App() {
 
  return (
    <>

      <section className="hero">
      <div className="left">
        <h1>Hii i'm Akshay</h1>
        <h5>
          I'm
          <p> Font end web developer.</p><br />
          Reach out for more info.
        </h5>
        <button className="contact-button">
          <a href="mailto:akshaysawant917@gmail.com">Contact me</a>
        </button>
      </div>
      <div className="right">
      <img src= {boy} alt="" />
      </div>
      <div className="blur1"></div>
      <div className="blur2"></div>


    </section>

    </>
  )
}

export default App
