/**
 * AdBanner Component - Web Platform
 *
 * PRESENTATION LAYER - Web version (no ads on web)
 * AdMob is not supported on web platform.
 *
 * This is a placeholder component that returns null.
 */

interface AdBannerProps {
  /**
   * Optional style for the banner container
   */
  style?: object;
  
  /**
   * Banner Ad Unit ID (unused on web)
   */
  adUnitId?: string;
  
  /**
   * iOS Banner Ad Unit ID (unused on web)
   */
  iosAdUnitId?: string;
  
  /**
   * Android Banner Ad Unit ID (unused on web)
   */
  androidAdUnitId?: string;
}

/**
 * AdBanner - Web version (no ads on web)
 *
 * AdMob is not supported on web platform.
 * This is a placeholder component that returns null.
 */
export function AdBanner(_props: AdBannerProps) {
  // AdMob not supported on web platform
  return null;
}

