import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import gzip from "lume/plugins/gzip.ts";

const site = lume({
  location: new URL("https://www.neoresq.com/"),
});

site.use(metas());
site.use(robots());
site.use(tailwindcss());
site.use(sitemap());
site.use(gzip());

site.add("styles.css");
site.copy("assets");
site.copy("CNAME");
site.copy("_redirects");
site.copy("patents/NO338751B1.pdf");
site.copy("patents/US10485581B2.pdf");
site.ignore("README.md");
site.ignore("patents/README.md");

export default site;
