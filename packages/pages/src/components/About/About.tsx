import React from "react";


//- Partials
import Team from "./Team";


const About = ({data}) => {

    return (
      <div id="about">
        <main>
          <div id="sections">
            <section>
              <h1>About Us</h1>
              <p>
                Raise is a loan marketplace that connects individuals with
                investment opportunities primarily in emerging countries.
                Leveraging Blockchain technology, Raise is a transparent and
                secure platform that allows investors to earn great returns
                while borrowers are able to grow their own businesses.
              </p>
            </section>

            <section>
              <h4>Raise’s Vision is simple</h4>
              <p>
                Raise’s vision is simple: Building an environment that will see
                future generations benefit by providing attainable credit. This
                creates a world where people in emerging countries will have the
                chance to generate a raise in their education opportunities, a
                raise to access of superior healthcare facilities and even raise
                their own businesses into fruition.
              </p>
            </section>

            <section>
              <h4>Find us in Barcelona</h4>
              <p>
                We are an international team consisting of 7 different
                nationalities (including our Filipino dog). We are based in
                Barcelona, a city growing with innovative startups, a home to
                some of the best universities with a focus on technology and a
                place with a growing blockchain community that allows us to
                network daily. This means that, by placing Raise’s headquarters
                here we knew we would be able to find the best of the best
                engineers and developers for our project and build a team that
                could grow personally and professional through each others
                learnings and knowledge. The sun is always shining here, the
                coast is beautiful and the food is delicious, so we're super
                happy to be in this city.
              </p>
            </section>
            <section>
              <h4>Meet the team</h4>
              <Team />
            </section>

          </div>

        </main>
      </div>
    );
  }
}

export default About;
