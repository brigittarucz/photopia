const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/users";

const URL = "http://localhost:3000";

function generateSiteMap(users) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     ${users
       .map(({ id }) => {
         return `
           <url>
               <loc>${`${URL}/users/${id}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const users = await request.json();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(users);

  res.setHeader("Content-Type", "text/xml");

  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
