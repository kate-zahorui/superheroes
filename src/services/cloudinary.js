import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dg7weymgu',
  },
});

export const getCloudImage = img => {
  const url = cld.image(img);
  return url;
};
