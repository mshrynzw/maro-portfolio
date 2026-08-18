export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Google Search Console の HTML ファイル確認用（.html のまま 200 を返す）
    if (url.pathname === "/google44d6e75aeb3252b6.html") {
      return new Response(
        "google-site-verification: google44d6e75aeb3252b6.html\n",
        {
          status: 200,
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=0, must-revalidate",
          },
        }
      );
    }

    return env.ASSETS.fetch(request);
  },
};
