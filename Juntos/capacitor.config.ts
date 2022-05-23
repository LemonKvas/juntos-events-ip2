import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.juntos.events',
  appName: 'Juntos',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "295740835695-o2nmb8i91d50u37lku1mibm7h0i4rm43.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
