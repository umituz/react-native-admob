/**
 * AdMob Repository Interface - Domain Layer
 *
 * CLEAN ARCHITECTURE: Domain Layer (No external dependencies)
 * Defines the contract for AdMob operations without implementation details.
 */

/**
 * AdMob error types
 */
export type AdMobError = {
  code: 'INITIALIZATION_FAILED' | 'AD_LOAD_FAILED' | 'AD_SHOW_FAILED' | 'NOT_READY';
  message: string;
};

/**
 * Generic Result type for AdMob operations
 */
export type AdMobResult<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: AdMobError;
};

/**
 * AdMob configuration
 */
export interface AdMobConfig {
  /**
   * AdMob App ID
   */
  appId: string;

  /**
   * Banner Ad Unit ID
   */
  bannerAdUnitId: string;

  /**
   * Interstitial Ad Unit ID (optional)
   */
  interstitialAdUnitId?: string;

  /**
   * Rewarded Ad Unit ID (optional)
   */
  rewardedAdUnitId?: string;

  /**
   * Enable test mode
   */
  testMode?: boolean;

  /**
   * Request non-personalized ads (GDPR compliance)
   */
  requestNonPersonalizedAds?: boolean;
}

/**
 * AdMob Repository Interface
 *
 * Defines all AdMob-related operations following Clean Architecture principles.
 * Implementation will be in Infrastructure layer (react-native-google-mobile-ads integration).
 */
export interface IAdMobRepository {
  /**
   * Initialize AdMob SDK
   */
  initialize(config: AdMobConfig): Promise<AdMobResult<void>>;

  /**
   * Check if AdMob is initialized
   */
  isInitialized(): boolean;

  /**
   * Load banner ad
   */
  loadBannerAd(adUnitId: string): Promise<AdMobResult<void>>;

  /**
   * Load interstitial ad
   */
  loadInterstitialAd(adUnitId: string): Promise<AdMobResult<void>>;

  /**
   * Show interstitial ad
   */
  showInterstitialAd(): Promise<AdMobResult<void>>;

  /**
   * Load rewarded ad
   */
  loadRewardedAd(adUnitId: string): Promise<AdMobResult<void>>;

  /**
   * Show rewarded ad
   */
  showRewardedAd(): Promise<AdMobResult<{ rewarded: boolean }>>;
}

