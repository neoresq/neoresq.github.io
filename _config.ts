import lume from "lume/mod.ts";
import tailwindCSS from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://www.neoresq.com/"),
});

site.use(tailwindCSS());
site.use(postcss());

site.add("styles.css");
site.copy("assets");
site.copy("CNAME");
site.copy("patents/NO338751B1.pdf");
site.copy("patents/US10485581B2.pdf");
site.ignore("README.md");
site.ignore("patents/README.md");

export default site;
