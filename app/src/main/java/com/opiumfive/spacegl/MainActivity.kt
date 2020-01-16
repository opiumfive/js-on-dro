package com.opiumfive.spacegl

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import android.view.Window
import android.view.WindowManager
import android.webkit.*
import androidx.webkit.WebViewAssetLoader


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        requestWindowFeature(Window.FEATURE_NO_TITLE)
        window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)
        setContentView(R.layout.activity_main)

        webView.settings.javaScriptEnabled = true
        webView.settings.builtInZoomControls = true
        webView.settings.displayZoomControls = false
        webView.settings.domStorageEnabled = true
        webView.settings.javaScriptCanOpenWindowsAutomatically = true
        webView.settings.loadWithOverviewMode = true
        webView.settings.useWideViewPort = true

        webView.settings.cacheMode = WebSettings.LOAD_DEFAULT

        //webView.settings.setAppCacheMaxSize(1024*1024*8);
        //webView.settings.setAppCachePath("/data/data/com.opiumfive.spacegl/cache"‌​);
        //webView.settings.setAppCacheEnabled(true);

        webView.webChromeClient = WebChromeClient()

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }
        }

        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")

        a1.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index.html") }
        a2.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index2.html") }
        a3.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index3.html") }
        a4.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index4.html") }
        a5.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index5.html") }
        a6.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index6.html") }
        a7.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index7.html") }
        a8.setOnClickListener { webView.loadUrl("https://appassets.androidplatform.net/assets/index8.html")}
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
