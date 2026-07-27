const publicAssetPath = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export { publicAssetPath };
