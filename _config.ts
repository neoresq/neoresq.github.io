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

export default site;
