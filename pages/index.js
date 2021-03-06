import Head from "next/head"
import getJSON from "../helpers/getJSON"
import sortByDateDesc from "../helpers/sortByDateDesc"
import { NewsProvider } from "../contexts/News"
import { EventsProvider } from "../contexts/Events"
import { HeaderTopNav, Header, Newsletter, Footer } from "../components/Common"
import { About, News, Events } from "../components/Home"
import { Wrapper, Background, HeaderContent } from "../components/Home/ui"

const URL = "https://minasdev.org/"
const TITLE = "Minas Dev"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Home = ({ news, events }) => (
  <Wrapper>
    <Head>
      {/* SEO */}
      <link rel="canonical" href={URL} />

      {/* About */}
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      {/* Facebook Tags */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={URL} />
      <meta property="og:site_name" content={TITLE} />
      {/* Twitter Tags */}
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:title" content={TITLE} />
      {/* PWA Configs */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="no" />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="application-name" content={TITLE} />
      <meta name="apple-mobile-web-app-title" content={TITLE} />
      <meta name="theme-color" content="#e64c3b" />
      <meta name="msapplication-navbutton-color" content="#e64c3b" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
    </Head>

    <HeaderTopNav />

    <HeaderContent>
      <Header mainNav={{ url: "/vagas", label: "VAGAS" }} />
      <About />
      <Background aria-hidden="true">
        <source
          srcSet={require("../public/images/background.jpg?webp")}
          type="image/webp"
        />
        <source srcSet="/images/background.jpg" type="image/jpg" />
        <img
          src="/images/background.jpg"
          alt="Plano de fundo: Um dedo tocando uma tela de celular"
        />
      </Background>
    </HeaderContent>

    <Newsletter />

    <NewsProvider news={news}>
      <News />
    </NewsProvider>
    <EventsProvider events={events}>
      <Events />
    </EventsProvider>
    <Footer />
  </Wrapper>
)

export const config = { unstable_runtimeJS: false }

export const getServerSideProps = async () => {
  let news = await getJSON("news.json")
  let events = await getJSON("events.json")
  events = events
    .filter((event) => event.sources.length > 0)
    .map((event) => event.sources)
    .flat()
    .sort(sortByDateDesc)

  return {
    props: {
      news: news.slice(0, 6),
      events,
    },
  }
}

export default Home
