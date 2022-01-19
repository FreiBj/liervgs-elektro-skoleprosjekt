import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/page2.css"
import Quiz from "react-quiz-component"

import trettentre from "../images/kurs1/trettentre.png"
import kjerne from "../images/kurs1/kjerne.png"
import forhold from "../images/kurs1/forhold.png"
import matti from "../images/ezgif.com-gif-maker.gif"

const quiz = {
  quizTitle: "<AC til AC QUIZ!!!<3>",
  quizSynopsis:
    "Bevis at du har lært noe her, eller ikke. Det er helt innafor, men prøv da å reflektere over det du har lest om ;)",
  nrOfQuestions: "2",
  questions: [
    {
      question:
        "Hva oppstår når du har like mange viklinger på begge sidene av en transformator??",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Galvanisk skille",
        "Rippelspenning",
        "Kortsluttning",
        "Ingenting",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Riktig. GG WP <3.",
      messageForIncorrectAnswer:
        "Det var feil uWu, men du kan prøve igjen <3 xD",
      explanation: "Lærerikt xD",
      point: "50",
    },
    {
      question: "Hva står Uₛ for?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Sekundærspenning",
        "Usersspenning",
        "Spenningstap",
        "Universal Spenning",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Riktig. babe <3.",
      messageForIncorrectAnswer:
        "Det var feil OwO, men du kan prøve igjen <3 :-D",
      explanation: "ye",
      point: "50",
    },
  ],
}

const SecondPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Page two" />
        <section
          className="hero"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1467579424161-6bbc141569d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)",
            backgroundSize: "cover",
          }}
        >
          <div className="container" style={{ color: "#000" }}>
            <h5>AC til AC</h5>
            <h1>Omforming fra AC til AC</h1>
          </div>
          <div className="image">
            <picture></picture>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <div className="text-wrapper">
              <div className="intro__info">
                <h6>Kapittel 1 —ACAC</h6>
                <p>
                  I dette kapittelet skal vi se på noen fine bilder av omforming
                  fra AC til AC?!
                </p>

                <h6>Reading time</h6>
                <p>Spørs på hvor fort du leser.</p>

                <h6>Quiz?</h6>
                <p>Nederst på siden</p>
                {/* <h6>Company size</h6>
                <p>51 — 200 employees</p>
                <h6>Funding</h6>
                <p>~$4.5M</p>
                <h6>Services we provided</h6>
                <ul>
                  <li>Visual identity</li>
                  <li>UX research</li>
                  <li>Website design</li>
                  <li>Design system</li>
                  <li>CMS integration</li>
                </ul> */}
              </div>

              <div className="image-grid">
                <div className="row">
                  <div
                    className="col col-sm-12"
                    style={{ marginLeft: "0", paddingLeft: "0" }}
                  >
                    <picture>
                      <img src={kjerne} style={{ width: "100%" }} />
                    </picture>
                  </div>
                </div>
              </div>

              <h2>Straight up boring facts</h2>

              <p>
                <ul className="styled-list">
                  <li>Galvanisk skille</li>
                  <ul className="styled-list nested">
                    <li>Like mange viklinger på begge sidene</li>
                    <li>Øker sikkerheten</li>
                  </ul>
                </ul>

                <ul className="styled-list">
                  <li>Muligheter</li>
                  <ul class="styled-list nested">
                    <li>Gjøre om spenningen</li>
                  </ul>
                </ul>
              </p>
              <h2>Transormatoren</h2>
              <p>
                {" "}
                Når man skal forandre spenningen til enten en høyere eller
                lavere spenning bruker man en transformator. Transformatorer
                fungerer med at det er en jernkjerne som har to spoler. Den
                første er primærspole og den andre er sekundærspole. Med å vikle
                forskjellige mengder rundt hver av spolene kan man transformere
                spenning fra primærspolen enten høyere eller lavere til
                sekundærspolen.{" "}
              </p>
              <div className="row">
                <div className="col col-6 col-sm-12">
                  <img src={forhold} />
                </div>
              </div>
              <h2> Viklinger </h2>
              <p>
                {" "}
                Mengden som kommer ut av sekundærspolen er koblet til forholdet
                mellom mengden viklinger på primærspolene og sekundærspolen.
                Samtidig mengden av primærspenningen. Utregningene kan man se på
                bildet over.{" "}
              </p>
            </div>
            <div className="image-grid">
              <div className="row">
                <div className="col col-6 col-sm-12">
                  <picture>
                    <img src={trettentre} />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="website">
          <div className="container">
            <div className="image-grid">
              <div className="row">
                <div className="col">
                  <div className="text-block">
                    <h2></h2>
                    <p>
                      {" "}
                      Hvis en transformator har like mange viklinger på begge
                      spolene, så kalles den et galvanisk skille, men hva er
                      grunnen til et galvanisk skille hvis den ikke
                      transformerer spenningen som er hele oppgaven til en
                      transformator?
                      <br />
                      <br />
                      br Dette er for å gjøre at spenningen inn i
                      transformatoren ikke har noen direkte kontakt mellom
                      spenningen inn og ut, dette høres fortsatt ikke veldig
                      effektivt, men dette oppnår at kretsen ikke har en sluttet
                      krets mellom person og jord hvis de kommer i kontakt med
                      kabelen som illustrert i bildet over.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <Quiz quiz={quiz} />
              </div>

              <div className="row">
                <div className="col">
                  <picture>
                    <source srcSet="./assets/img/projects/sendlane/img35@2x.jpg 2x, ./assets/img/projects/sendlane/img35.jpg 1x" />
                    <img src="./assets/img/projects/sendlane/img35.jpg" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-cta">
          <div className="container">
            <h2>Next up</h2>
            <div className="wrapper">
              <div className="column right">
                <project-card>
                  <Link to="/dctilac/">
                    <a
                      className="project-card index-0 active"
                      href="/project/patch-web"
                    >
                      <div className="image">
                        <picture className="ng-star-inserted">
                          <img src={matti} />
                        </picture>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      <div className="text">
                        <p className="ng-star-inserted">— DC til AC.</p>
                        {/**/}
                      </div>
                      {/**/}
                    </a>
                  </Link>
                </project-card>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          [_nghost-qfx-c45] h2 {
            font-weight: 400;
            letter-spacing: -1px;
            line-height: 1.16;
            padding-bottom: 0.9375rem;
          }

          @media (max-width: 991px) {
            [_nghost-qfx-c45] h2 {
              font-size: 2.5rem;
            }
          }

          [_nghost-qfx-c45] h4 {
            font-weight: 400;
            letter-spacing: -1px;
            line-height: 1.33;
          }

          [_nghost-qfx-c45] h6 {
            line-height: 1.5;
          }

          [_nghost-qfx-c45] h6,
          [_nghost-qfx-c45] p {
            font-weight: 400;
            letter-spacing: -0.5px;
          }

          [_nghost-qfx-c45] p {
            font-size: 1.25rem;
            line-height: 1.4;
          }

          [_nghost-qfx-c45] img,
          [_nghost-qfx-c45] picture {
            position: relative;
            display: block;
            width: auto;
            max-width: 100%;
            margin: 0 auto;
          }

          @media (max-width: 767px) {
            [_nghost-qfx-c45] img.sm-full,
            [_nghost-qfx-c45] picture.sm-full {
              margin-left: -20px;
              width: 100vw;
              max-width: none;
            }

            [_nghost-qfx-c45] img.sm-full img,
            [_nghost-qfx-c45] picture.sm-full img {
              margin-left: 0;
            }
          }

          [_nghost-qfx-c45] img > span,
          [_nghost-qfx-c45] picture > span {
            position: absolute;
            top: 1.875rem;
            left: 1.875rem;
            font-size: 1rem;
            font-weight: 600;
          }

          @media (max-width: 767px) {
            [_nghost-qfx-c45] img > span,
            [_nghost-qfx-c45] picture > span {
              top: 0.9375rem;
              left: 0.9375rem;
              font-size: 0.825rem;
            }
          }

          [_nghost-qfx-c45] img > span.txt-white,
          [_nghost-qfx-c45] picture > span.txt-white {
            color: #fff;
          }

          [_nghost-qfx-c45] img > span.txt-white-light,
          [_nghost-qfx-c45] picture > span.txt-white-light {
            color: hsla(0, 0%, 100%, 0.4);
          }

          [_nghost-qfx-c45] img > span.txt-light,
          [_nghost-qfx-c45] picture > span.txt-light {
            color: rgba(4, 40, 37, 0.33);
          }

          [_nghost-qfx-c45] img > span.bottom,
          [_nghost-qfx-c45] picture > span.bottom {
            top: auto;
            bottom: 1.875rem;
          }

          @media (max-width: 767px) {
            [_nghost-qfx-c45] img > span.bottom,
            [_nghost-qfx-c45] picture > span.bottom {
              top: auto;
              bottom: 0.9375rem;
            }
          }

          .container {
            max-width: 1280px !important;
          }

          .intro__info {
            position: absolute;
            top: 0;
            left: 0;
            width: 33.33%;
            max-width: calc(320px * var(--scale));
            padding-right: calc(40px * var(--scale));
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 1.5;
          }

          @media (max-width: 767px) {
            .intro__info {
              position: relative;
              width: 100%;
              max-width: 100%;
              padding-right: 0;
              padding-bottom: calc(150px * var(--scale));
              margin-bottom: calc(150px * var(--scale));
              font-size: 1.25rem;
              line-height: 1.4;
            }

            .intro__info:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 1px;
              background-color: #dee2e6;
            }
          }

          .intro__info h6 {
            font-weight: 700;
            margin-bottom: calc(5px * var(--scale));
          }

          @media (max-width: 767px) {
            .intro__info h6 {
              font-weight: 400;
              line-height: 1.16;
              letter-spacing: -1px;
              margin-bottom: calc(15px * var(--scale));
            }
          }

          .intro__info h6:not(:first-child) {
            margin-top: calc(20px * var(--scale));
          }

          @media (max-width: 767px) {
            .intro__info h6:not(:first-child) {
              margin-top: calc(60px * var(--scale));
            }
          }

          .intro__info p {
            padding: 0 !important;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 1.5;
          }

          @media (max-width: 767px) {
            .intro__info p {
              font-size: 1.25rem;
              line-height: 1.4;
            }
          }

          .intro__info a {
            margin-top: calc(15px * var(--scale));
          }

          .intro__info ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .intro__info ul li:before {
            content: "- ";
          }

          .project-result {
            overflow: hidden;
          }

          .project-result .container {
            position: relative;
            padding-left: calc(425px * var(--scale));
            padding-top: calc(150px * var(--scale));
            padding-bottom: calc(150px * var(--scale));
          }

          @media (min-width: 1500px) {
            .project-result .container {
              padding-left: calc(250px * var(--scale));
            }
          }

          @media (min-width: 992px) and(max-width: 1199px) {
            .project-result .container {
              padding-left: calc(256px * var(--scale));
            }
          }

          @media (max-width: 991px) {
            .project-result .container {
              padding-left: 20px;
              max-width: 600px;
              margin: 0 auto;
            }
          }

          .project-result .container > p {
            font-size: 1.5rem;
            letter-spacing: -0.5px;
            line-height: 1.33;
          }

          .project-result .container .quote {
            margin-top: calc(50px * var(--scale));
          }

          .project-result .container .quote .user {
            margin-top: calc(15px * var(--scale));
            font-size: 1rem;
            letter-spacing: -0.5px;
          }

          .project-result .container .visit {
            display: flex;
            align-items: center;
            margin-top: calc(50px * var(--scale));
          }

          .project-result .container .visit a {
            font-weight: 400;
            font-size: 1.5rem;
            letter-spacing: -1px;
            line-height: 1.33;
          }

          .project-result .container .visit img {
            display: block;
            margin-left: 0.625rem !important;
            margin-top: 3px !important;
          }

          .project-result .container .stats {
            margin-top: calc(100px * var(--scale));
            display: flex;
            flex-wrap: wrap;
          }

          .project-result .container .stats > div {
            flex: 0 0 50%;
            padding-left: calc(20px * var(--scale));
            padding-right: calc(20px * var(--scale));
            margin-top: calc(50px * var(--scale));
          }

          .project-result .container .stats > div:first-child,
          .project-result .container .stats > div:nth-child(2) {
            margin-top: 0;
          }

          @media (max-width: 767px) {
            .project-result .container .stats > div:nth-child(2) {
              margin-top: calc(50px * var(--scale));
            }
          }

          .project-result .container .stats > div:nth-child(odd) {
            padding-left: 0;
          }

          .project-result .container .stats > div:nth-child(2n) {
            padding-right: 0;
          }

          @media (max-width: 767px) {
            .project-result .container .stats > div {
              flex: 0 0 100%;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          }

          .project-result .container .work-done {
            margin-top: calc(100px * var(--scale));
            display: flex;
            flex-wrap: wrap;
          }

          .project-result .container .work-done > div {
            flex: 0 0 50%;
            padding-left: calc(20px * var(--scale));
            padding-right: calc(20px * var(--scale));
            margin-top: calc(50px * var(--scale));
          }

          .project-result .container .work-done > div:first-child,
          .project-result .container .work-done > div:nth-child(2) {
            margin-top: 0;
          }

          @media (max-width: 767px) {
            .project-result .container .work-done > div:nth-child(2) {
              margin-top: calc(50px * var(--scale));
            }
          }

          .project-result .container .work-done > div:nth-child(odd) {
            padding-left: 0;
          }

          .project-result .container .work-done > div:nth-child(2n) {
            padding-right: 0;
          }

          @media (max-width: 767px) {
            .project-result .container .work-done > div {
              flex: 0 0 100%;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          }

          .project-result .container .work-done > div h4 {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: -0.5px;
            line-height: 2;
          }

          .project-result .container .work-done > div ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .project-result .container .work-done > div ul li {
            position: relative;
            font-weight: 400;
            font-size: 1.25rem;
            letter-spacing: -0.5px;
            line-height: 2;
          }

          .project-result .container .work-done > div.credits {
            display: none;
          }

          .project-result .container .press {
            margin-top: calc(150px * var(--scale));
          }

          .project-result .container .press > div {
            text-align: center;
            margin-top: calc(100px * var(--scale));
          }

          .project-result .container .press > div .text {
            padding: calc(40px * var(--scale)) 0 calc(20px * var(--scale)) 0;
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: -1px;
            line-height: 1.25;
          }

          @media (max-width: 767px) {
            .project-result .container .press > div .text {
              font-size: 1.5rem;
            }
          }

          .project-result .container .press > div .name {
            font-size: 1rem;
            letter-spacing: -0.5px;
          }

          .project-result.w-820 .container,
          .testimonial .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
            max-width: calc(860px * var(--scale)) !important;
            margin: 0 auto !important;
          }

          .testimonial .container {
            padding-top: calc(160px * var(--scale));
          }

          .testimonial .container > h2,
          .testimonial .container > h3 {
            letter-spacing: -1px;
            line-height: 1.17;
          }

          @media (max-width: 767px) {
            .testimonial .container > h2 {
              font-size: 2.375rem;
              line-height: 1.25;
            }
          }

          @media (max-width: 767px) {
            .testimonial .container > h3 {
              font-size: 1.625rem;
              line-height: 1.25;
            }
          }

          .testimonial .container .user {
            display: flex;
            align-items: center;
            padding-top: calc(40px * var(--scale));
          }

          .testimonial .container .user .image {
            height: 100px;
            width: 100px;
            min-width: 100px;
            max-width: 100px;
          }

          .testimonial .container .user .text {
            padding-left: calc(20px * var(--scale));
            max-width: calc(280px * var(--scale));
          }

          @media (max-width: 1199px) {
            .testimonial .container .user .text {
              max-width: 280px;
            }
          }

          .testimonial .container .user .text h5 {
            font-weight: 600;
            font-size: 1.25rem;
            letter-spacing: -0.5px;
            margin-bottom: 4px;
          }

          .testimonial .container .user .text small {
            font-size: 1rem;
            letter-spacing: -0.5px;
          }

          .testimonial .container .user .text.mw-400 {
            max-width: calc(400px * var(--scale));
          }

          @media (max-width: 1199px) {
            .testimonial .container .user .text.mw-400 {
              max-width: 400px;
            }
          }

          .project-cta .container {
            position: relative;
            padding-top: calc(120px * var(--scale));
            padding-bottom: calc(20px * var(--scale));
          }

          .project-cta .container:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: calc(20px * var(--scale));
            right: calc(20px * var(--scale));
            height: 1px;
            background: #042825;
          }

          .project-cta .container > h2 {
            padding-bottom: calc(80px * var(--scale));
          }

          @media (max-width: 767px) {
            .project-cta .container > h2 {
              padding-bottom: calc(100px * var(--scale));
            }
          }

          .project-cta .container .wrapper {
            display: flex;
            align-items: center;
          }

          @media (max-width: 767px) {
            .project-cta .container .wrapper {
              flex-wrap: wrap;
            }
          }

          .project-cta .container .wrapper .column {
            flex: 0 0 50%;
            padding: 0 4.5%;
          }

          @media (max-width: 767px) {
            .project-cta .container .wrapper .column {
              flex: 0 0 100%;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}

export default SecondPage
