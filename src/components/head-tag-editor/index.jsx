import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({ profile, theme, googleAnalytics, social }) => {
  return (
    <Fragment>
      {profile && (
        <Helmet>
          {googleAnalytics?.id && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.id}`}
            ></script>
          )}
          {googleAnalytics?.id && (
            <script>
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalytics.id}');`}
            </script>
          )}
          <title>{profile.name} | Homepage</title>
          <meta
            name="theme-color"
            content={isDarkishTheme(theme) ? '#000000' : '#ffffff'}
          />

          <meta
            name="description"
            content="Projects made for anyone to enjoy. Check out our page or go to our Github organization to see what we've been up to lately."
          />

          <meta itemProp="name" content={`${profile.name} | Homepage`} />
          <meta
            itemProp="description"
            content="Projects made for anyone to enjoy. Check out our page or go to our Github organization to see what we've been up to lately."
          />
          <meta itemProp="image" content={profile.avatar} />

          <meta property="og:url" content="https://playantares.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`Portfolio of ${profile.name}`} />
          <meta
            property="og:description"
            content="Projects made for anyone to enjoy. Check out our page or go to our Github organization to see what we've been up to lately."
          />
          <meta property="og:image" content={profile.avatar} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${profile.name} | Homepage`} />
          <meta
            name="twitter:description"
            content="Projects made for anyone to enjoy. Check out our page or go to our Github organization to see what we've been up to lately."
          />
          <meta name="twitter:image" content={profile.avatar} />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  profile: PropTypes.object,
  theme: PropTypes.string,
  googleAnalytics: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;
