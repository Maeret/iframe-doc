export function onRouteUpdate({location, previousLocation}) {
  if (
    location.pathname == '/b2b-frame-goto'
    && location.search
  ) {
    if (localStorage.getItem('lng') == 'en') {
      window.location.assign(
        '/en/frontend/newTab'
      );
    } else {
      window.location.assign(
        '/frontend/newTab'
      );
    }

    localStorage.clear();
  }

  if (
    location.pathname == '/b2b-frame-goto'
    && !location.search
  ) {
    window.location.assign(
      '/404'
    );
  }

  // Redocusaurus conflicts with `/en` appended before the spec path
  if (
    location.pathname.includes('/api-en')
    && !(location.pathname.includes('/en'))
  ) {
    window.location.href = '../api';
  }
  else if (
    location.pathname !== previousLocation?.pathname
    && location.pathname == '/en/api'
  ) {
    window.location.href = '../en/api-en';
  }
}
