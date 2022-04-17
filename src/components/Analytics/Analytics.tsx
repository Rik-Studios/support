import React from 'react'

const Analytics = () => (
  <>
    <script
      async
      data-testid='gtm-gtag'
      src={`https://www.googletagmanager.com/gtag/js?id=`}
    />
    <script
      data-testid='gtm-datalayer'
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-5D3MGG ', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
)

export default Analytics
