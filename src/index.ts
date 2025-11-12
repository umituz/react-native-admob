/**
 * @umituz/react-native-admob - Public API
 *
 * Google AdMob integration for React Native apps
 * Banner, interstitial, and rewarded ads
 *
 * Usage:
 *   import { AdBanner, IAdMobRepository, AdMobConfig } from '@umituz/react-native-admob';
 */

// =============================================================================
// DOMAIN LAYER - Repository Interfaces
// =============================================================================

export type {
  IAdMobRepository,
  AdMobError,
  AdMobResult,
  AdMobConfig,
} from './domain/repositories/IAdMobRepository';

// =============================================================================
// PRESENTATION LAYER - Components
// =============================================================================

export { AdBanner } from './presentation/components/AdBanner';

