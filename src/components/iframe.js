const sizeMap = {
  'desktop': {
    width:  '100%',
    height: '760'
  },
  'mobile': {
    width:  '360',
    height: '760'
  }
};


export default function Iframe(env, props) {
  const src =
    props.src
    ? props.src
      .replace('PLATFORM_TYPE', props.type)
      .replace('LNG', props.lng)
      .replace('BG_COLOR', props.bgColor)
    : env == 'docs.com'
      ? props.ver
        ? props.lng
          ? 'https://iframe.top/iframe/main?gear=1&method_id=2&lng=en&cyber_type=2&sign=6c2d90baab2429d2348a9cb63e74e4b1'
          : 'https://docs-iframe-demo.con/iframe/main?gear=1&method_id=1&lng=en&sign=66a940a9eeb14b8a24215cd83f85ac4b'
        : `https:/frame-docs-demo.uplatform.com${props.lng ? ('/' + props.lng) : ''}?platform_type=${props.type}`
      : props.ver
        ? props.lng
          ? 'https://iframe.top/iframe/main?gear=1&method_id=2&lng=en&sign=6c2d90baab2429d2348a9cb63e74e4b1'
          : 'https://docs-iframe-demo.com/en/iframe/main?gear=1&sign=484fdc158f359ba14afabf22ce88b64b&method_id=1&lng=en'
        : `https://frame-docs-demo.payment.com${props.lng ? ('/' + props.lng) : ''}?platform_type=${props.type}`;
  const id =
    props.id
    ?? `iframe-demo-${props.type}`;
  const title =
    props.title
    ?? `demo-${props.type}`;
  const width =
    props.width
    ?? sizeMap[props.type].width;
  const height =
    props.height
    ?? sizeMap[props.type].height;

  return (
    <iframe
      id={id}
      title={title}
      width={width}
      height={height}
      src={src}
    />
  );
}
