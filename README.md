# @umituz/react-native-admob

Google AdMob integration for React Native apps - Banner, interstitial, and rewarded ads.

## Features

- ✅ **Banner Ads** - Adaptive banner ads for iOS and Android
- ✅ **Platform Support** - iOS, Android, Web (no-op on web)
- ✅ **Test Mode** - Automatic test IDs in development
- ✅ **GDPR Compliance** - Non-personalized ads support
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Clean Architecture** - Repository interface pattern

## Installation

```bash
npm install @umituz/react-native-admob
```

## Peer Dependencies

```bash
npm install react-native-google-mobile-ads
```

## Usage

### Basic Banner Ad

```tsx
import { AdBanner } from '@umituz/react-native-admob';

function MyScreen() {
  return (
    <View>
      <Text>My Content</Text>
      <AdBanner 
        adUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy"
      />
    </View>
  );
}
```

### Platform-Specific Ad Unit IDs

```tsx
<AdBanner 
  iosAdUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/ios-id"
  androidAdUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/android-id"
/>
```

### Development Mode

In development (`__DEV__ === true`), the component automatically uses test ad unit IDs. No configuration needed!

```tsx
// Automatically uses TestIds.ADAPTIVE_BANNER in development
<AdBanner />
```

## API Reference

### `AdBanner`

React component for displaying banner ads.

**Props:**
- `adUnitId?: string` - Banner Ad Unit ID (optional, uses test ID in dev)
- `iosAdUnitId?: string` - iOS-specific Ad Unit ID
- `androidAdUnitId?: string` - Android-specific Ad Unit ID
- `style?: object` - Optional style for the banner container

**Features:**
- Automatic test IDs in development
- Adaptive banner size
- GDPR compliance (non-personalized ads)
- Graceful error handling
- Web platform returns null (no ads on web)

### Types

- `IAdMobRepository` - Repository interface for AdMob operations
- `AdMobConfig` - AdMob configuration interface
- `AdMobError` - Error type for AdMob operations
- `AdMobResult<T>` - Result type for AdMob operations

## Platform Support

- ✅ **iOS** - Full support
- ✅ **Android** - Full support
- ✅ **Web** - Returns null (AdMob not supported on web)

## Development

In development mode, the component automatically uses test ad unit IDs from `react-native-google-mobile-ads`. No configuration needed!

## Production

For production, provide your AdMob Ad Unit IDs:

```tsx
<AdBanner 
  iosAdUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/ios-id"
  androidAdUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/android-id"
/>
```

## License

MIT

## Author

Ümit UZ <umit@umituz.com>

