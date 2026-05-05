import './Pages.css'

function Index() {
  return (
    <>

   <section id="top">
        <div>
          <h1>Hasnain Alahi</h1>
          <p>
            A Muslim developer who loves to share benefical knowledge
            in a plethoa of ways.

       <br></br>
       A lot of this is a WIP

          </p>

        </div>

      </section>


          <section id="about">
        <h2>About Me</h2>
        <p>
    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. QUISQUAM, QUOD. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/friedegg796/Muslimdiscs" target="_blank" rel="noopener noreferrer">
              Lorem
            </a>
          </li>

            </ul>
      </section>


      <footer id="footer">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Find me on these platforms</p>
          <ul>
            <li>
              <a href="https://github.com/friedegg796" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="ticks"></div>
      <section id="spacer"></section>
      </>
      )
       }


export default Index
