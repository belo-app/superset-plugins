/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module "*.module.css" {
  const classes: Record<string, string>;

  export default classes;
}
