import serialize from "serialize-javascript";
import bundleManifest from './../../webpack-assets.json';

export default (
  head,
  markup,
  initialData,
  asyncState,
  offline
) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
      <![endif]-->
      ${head.title}
      ${head.meta}
      ${head.link}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#2d89ef">
      <meta name="theme-color" content="#ffffff">
      
      <link rel="stylesheet" href="/${bundleManifest.main.css}">
      <link rel="manifest" href="/manifest.json">
    </head>
    <body>
      <div id="root">${markup}</div>
      <script src="/${bundleManifest.vendor.js}"></script>
      <script src="/${bundleManifest.main.js}" defer></script>
      <script>window.__initialData__ = ${serialize(initialData)}</script>
      <script type="text/javascript">
        // Serialise the state into the HTML response
        window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
      </script>
      <script type="text/javascript">${offline.serviceWorker}</script>
    </body>
  </html>
  `

  return html;
}
