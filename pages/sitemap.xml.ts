import { GetServerSideProps } from "next";

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/users";

const URL = "http://localhost:3000";

interface User {
  id: number;
  name: string;
}

function generateSiteMap(users: User[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/users</loc>
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
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
};

export default function SiteMap() {}
