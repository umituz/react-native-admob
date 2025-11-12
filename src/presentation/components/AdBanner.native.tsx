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
import { Platform, StyleSheet, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

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
export function AdBanner({ 
  adUnitId, 
  style, 
  iosAdUnitId, 
  androidAdUnitId 
}: AdBannerProps) {
  // Determine ad unit ID
  const bannerAdUnitId = adUnitId || (__DEV__
    ? TestIds.ADAPTIVE_BANNER // Test ID for development
    : Platform.select({
        ios: iosAdUnitId,
        android: androidAdUnitId,
      }) || TestIds.ADAPTIVE_BANNER);

  return (
    <View style={[styles.container, style]}>
      <BannerAd
        unitId={bannerAdUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true, // GDPR compliance
        }}
        onAdFailedToLoad={(_error: unknown) => {
          // Silent error handling - ads are non-critical
          // Errors are logged by react-native-google-mobile-ads SDK
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

