import PropTypes from "prop-types"
import format from "date-fns/format"
import getDateObjectFromString from "../../../helpers/getDateObjectFromString"
import getTagsPtBr from "../../../helpers/getTagsPtBr"

import {
  Wrapper,
  PublicationDate,
  JobTitle,
  JobLanguage,
  JobIsRemote,
  JobLink,
  JobOnMinasDevSlack,
  JobCompany,
  Source,
  SourceLink,
  Tags,
} from "./ui"

const Job = ({ company, date, position, url, tags, metadata }) => {
  const { language, name: source, website } = metadata
  const tagList = [...new Set(tags.map((tag) => getTagsPtBr[tag]))]
    .filter(Boolean)
    .join(", ")

  return (
    <Wrapper itemScope itemType="http://schema.org/JobPosting">
      <PublicationDate>
        Publicado em
        <time itemProp="datePosted" dateTime={date}>
          {format(getDateObjectFromString(date), "dd/MM/yyyy")}
        </time>
        <JobLanguage>{language === "en-us" ? "🌐" : "🇧🇷"}</JobLanguage>
        {tags.includes("remote") ? <JobIsRemote>REMOTO</JobIsRemote> : null}
      </PublicationDate>
      <JobTitle itemProp="title">
        <JobLink itemProp="url" href={url} target="_blank" rel="noopener">
          {position}
        </JobLink>
        {source === "Minas Dev Vagas" ? (
          <JobOnMinasDevSlack>
            <source
              srcSet={require("../../../public/images/minasdev-logo-57x57.png?webp")}
              type="image/webp"
            />
            <source srcSet="/images/minasdev-logo-57x57.png" type="image/png" />
            <img
              src="/images/minasdev-logo-57x57.png"
              alt="Logomarca do Minas Dev"
            />
          </JobOnMinasDevSlack>
        ) : null}
      </JobTitle>
      <JobCompany>{`@${company}`}</JobCompany>
      <Source itemProp="source">
        <SourceLink href={website} target="_blank" rel="noopener">
          {source}
        </SourceLink>
        {tagList.length ? <Tags>{`, ${tagList}`}</Tags> : null}
      </Source>
    </Wrapper>
  )
}

Job.propTypes = {
  data: PropTypes.object,
}

export default Job
