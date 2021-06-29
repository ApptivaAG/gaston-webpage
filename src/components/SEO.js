import React from 'react'
import { getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'gatsby-plugin-intl'

const gastonUrl = 'https://gastonsolution.com'

function SEO({ intl, description, image, meta, title }) {
  const metaDescription =
    description || `${intl.formatMessage({ id: 'description' })}`

  const imageSrc = getSrc(image)

  const metaImage = image
    ? [
        { property: 'image', content: `${gastonUrl}${imageSrc}` },
        { property: 'og:image', content: `${gastonUrl}${imageSrc}` },
        {
          property: 'og:image:width',
          content: imageSrc,
        },
        {
          property: 'og:image:height',
          content: imageSrc,
        },
        {
          property: 'twitter:image',
          content: `${gastonUrl}${imageSrc}`,
        },
      ]
    : [
        { property: 'image', content: `${gastonUrl}/img/site-image.png` },
        { property: 'og:image', content: `${gastonUrl}/img/site-image.png` },
        {
          property: 'og:image:width',
          content: 2700,
        },
        {
          property: 'og:image:height',
          content: 1350,
        },
        {
          property: 'twitter:image',
          content: `${gastonUrl}/img/site-image.png`,
        },
      ]

  return (
    <Helmet
      htmlAttributes={{ lang: `${intl.formatMessage({ id: 'lang' })}` }}
      title={title}
      titleTemplate={`%s | ${intl.formatMessage({ id: 'title' })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `${intl.formatMessage({ id: 'author' })}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta)
        .concat(metaImage)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  image: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default injectIntl(SEO)
