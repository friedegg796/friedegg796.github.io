import './Pages.css'

function Index() {
  return (
    <>

   <section id="center">
        <div>
          <h1>Hasnain Alahi</h1>
          <p>
            A Muslim developer who loves to share benefical knowledge,
            whether it be through gaming, websites, or otherwise.

       <br></br>
       A lot of this is a WIP

          </p>
        </div>

      </section>

      <section id="next-steps">
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
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      </>
      )
       }


export default Index
