package com.nudgenudge;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
//import com.zmxv.RNSound.RNSoundPackage;
//import com.facebook.reactnative.androidsdk.FBSDKPackage;
//import co.apptailor.googlesignin.RNGoogleSigninPackage;
//import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;

import java.util.Arrays;
import java.util.List;

import android.app.Application;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
            // eg. new VectorIconsPackage()
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage()
    );
  }
}