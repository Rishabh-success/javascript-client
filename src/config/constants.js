export const PUBLIC_IMAGE_FOLDER = '/images/';

export const DEFAULT_BANNER_IMAGE = 'banners/default.png';

export const banners = ['banners/cloud.jpg', 'banners/dns-server.png', 'banners/full-stack-web-development.jpg', 'banners/load-balancer.png'];

export const total = 5;

const selectOptions = [
  {
    label: 'Cricket',
    value: 'cricket',
  },
  {
    label: 'Football',
    value: 'football',
  },
];
const radioOptionsCricket = [
  {
    label: 'Wicket Keeper',
    value: 'wicket keeper',
  },
  {
    label: 'Batsman',
    value: 'batsman',
  },
  {
    label: 'Bowler',
    value: 'bowler',
  },
  {
    label: 'All Rounder',
    value: 'all rounder',
  },
];

const radioOptionsFootball = [
  {
    label: 'Striker',
    value: 'striker',
  },
  {
    label: 'Defender',
    value: 'defender',
  },
];
const options = {
  football: radioOptionsFootball,
  cricket: radioOptionsCricket,
};
export { selectOptions, options };
