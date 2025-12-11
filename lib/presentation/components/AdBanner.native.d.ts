/**
 * AdBanner Component - Native (iOS/Android)
 *
 * PRESENTATION LAYER - AdMob banner ads
 *
 * ⚠️ NOTE: Requires 'react-native-google-mobile-ads' package
 *
 * Features:
 * - Uses test IDs in development
 * - Adaptive banner size for better UX
 * - GDPR compliance (non-personalized ads)
 * - Graceful error handling
 */
import React from 'react';
interface AdBannerProps {
    /**
     * Banner Ad Unit ID
     * If not provided, uses test ID in development
     */
    adUnitId?: string;
    /**
     * Optional style for the banner container
     */
    style?: object;
    /**
     * iOS Banner Ad Unit ID (for platform-specific IDs)
     */
    iosAdUnitId?: string;
    /**
     * Android Banner Ad Unit ID (for platform-specific IDs)
     */
    androidAdUnitId?: string;
}
/**
 * AdBanner - Shows banner ads
 *
 * Features:
 * - Uses test IDs in development
 * - Adaptive banner size for better UX
 * - Handles load errors gracefully
 */
export declare function AdBanner({ adUnitId, style, iosAdUnitId, androidAdUnitId }: AdBannerProps): React.JSX.Element;
export {};
//# sourceMappingURL=AdBanner.native.d.ts.map