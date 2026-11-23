const steps = [
  { tag: "Step 1", title: "Size the site up", body: "Monthly Google visitors, how many searches it shows up for, and how many websites link to it." },
  { tag: "Step 2", title: "Split the traffic", body: "Brand searches (people typing the company name) vs everything else. The most important split in the whole report, because you cannot copy people knowing a name." },
  { tag: "Step 3", title: "Find the earning pages", body: "The pages that bring in the non-brand traffic, the searches you could actually win." },
  { tag: "Step 4", title: "Group by page type", body: "Product pages, collection pages, blog posts, free tools: how much each type brings in, so you see the pattern instead of a pile of keywords." },
  { tag: "Step 5", title: "Check AI answers", body: "How often Google's AI Overview answers name the site as a source." },
  { tag: "Step 6", title: "Read the top pages", body: "It opens them and reads them: written by hand, or stamped out from one template?" },
  { tag: "Step 7", title: "Find the link magnets", body: "The strongest websites linking in, and which pages attract those links." },
  { tag: "Step 8", title: "Write the moves", body: "Three to five moves shrunk to fit a smaller business, the first page to build, and an honest section called What Won't Copy." },
];

const allbirdsPatterns = [
  { tag: "Pattern: [colour] shoes", title: "18,100 searches a month for all black shoes", body: "Colour collection pages answer them: all black shoes 18,100, grey shoes 8,100, more colour variants behind. The pages are thin, one line of intro and a grid of shoes, they carry barely any links, and the difficulty score is zero. The /collections/ section ranks for 108 keywords and takes 27% of the site's traffic. This is the page type a small store can build this week." },
  { tag: "Pattern: [material]", title: "No leather: 320 a month and rising", body: "The plant leather page ranks No. 6 for 'no leather' with about 75 words of copy on it. A small, fast growing search answered by one proper page per material." },
  { tag: "Pattern: best shoes for [job]", title: "Teacher shoes: 3,600 a month, 9,900 in August", body: "The Best Shoes for Teachers guide rides the back to school spike every year. One guide per job where people stand all day, published before the season starts." },
  { tag: "Link magnets", title: "The pages with the numbers earn the links", body: "Other than the homepage, the strongest sites link to the sustainability pages, the materials pages and the carbon footprint calculator. The Guardian and HubSpot link to them: when people need a number to back up a point, they link to the page that has the number." },
];

const allbirdsMoves = [
  { tag: "Move 1", title: "Colour pages with your angle", body: "Not 'black sneakers', which you will never win, but 'black vegan sneakers' and 'white recycled sneakers', with a real intro, a short FAQ and the shoes underneath." },
  { tag: "Move 2", title: "One page per material", body: "Vegan leather, recycled plastic, natural rubber: what it is, how long it lasts, how to look after it, then the shoes made from it." },
  { tag: "Move 3", title: "Best shoes for, per job", body: "Teachers before back to school, nurses, retail staff. Publish before the season, not during it." },
  { tag: "Move 4", title: "Your numbers on one page", body: "Real sustainability numbers on a single page, then use it to get into gift guides and roundups. First page to build of all four: Black Vegan Sneakers, at /collections/black-vegan-sneakers." },
];

const patelPatterns = [
  { tag: "Pattern: free [SEO task] tool", title: "Backlinks checker: 135K searches a month", body: "Free tool searches bring about a quarter of the traffic: backlinks checker, free keyword research tool, free SEO audit, website traffic checker. And the report is blunt about them: what won't copy. The tools run on live data feeds, so a small agency should not try to build them." },
  { tag: "Pattern: [service] for [industry]", title: "The quiet winners", body: "A page for website conversion optimization services ranks 5th with a difficulty of 4 out of 100. Link building for ecommerce ranks No. 1 with a difficulty of 6. People looking to hire someone: low competition, high intent." },
  { tag: "Pattern: [platform problem] explained", title: "How to tell if I am in Facebook jail", body: "Problem guides rank top five with almost no competition: Facebook jail, vendor central Amazon. Every client base has its own version of these questions." },
  { tag: "Pattern: what is [marketing term]", title: "The pillar guides", body: "Social media marketing, digital marketing, content marketing at 165K, 165K and 135K searches a month, held at positions 20 to 44. Big explainers bring the rest of the traffic after the tools." },
];

const patelMoves = [
  { tag: "Move 1", title: "One service page per niche", body: "Not 'SEO services', but 'SEO services for ecommerce stores', with your own proof, your own process and your own case studies on the page." },
  { tag: "Move 2", title: "One small calculator that collects leads", body: "Not a giant tool. Something like a website traffic calculator where the result gets emailed to the person, with an offer of a free audit underneath it." },
  { tag: "Move 3", title: "Free SEO audit as a lead page", body: "The person searching 'free SEO audit' for their store is basically asking for a sales call. First page to build: Free SEO Audit for Ecommerce Stores, a short form and a sample audit to download." },
  { tag: "Move 4", title: "Guides for client problems", body: "Why did my Google Business profile get suspended, and how to fix it. Each guide links to the service that fixes the problem. Bonus: run the teardown on a prospect's biggest competitor before the sales call and walk in with the first three pages they should build." },
];

const setup = [
  { tag: "Setup 1", title: "Get OpenSEO running", body: "Hosted at openseo.so, where you just sign in, or on your own computer with Docker. Either way, connect a DataForSEO account: that is where the keyword and link numbers come from. OpenSEO is the eyes; Claude cannot see Google's numbers on its own." },
  { tag: "Setup 2", title: "Connect it to Claude Code", body: "Inside OpenSEO, 'AI and agents' gives you the exact connect line: one command that adds OpenSEO as a server Claude Code can talk to. After that, Claude can call all the OpenSEO tools itself." },
  { tag: "Setup 3", title: "Install the skill, after reading it", body: "On the SEO Party page there is an install command for your terminal, and a copy for your agent button if you would rather paste the instructions in. The page warns the skill passed automatic checks but has not been reviewed by hand yet, so open the skill file and read it first. It is a page of plain instructions." },
  { tag: "Setup 4", title: "Type the one sentence", body: "Name the country or every number comes back for the wrong market. Include your business or you get general patterns instead of a to do list. Add 'save the full report' so you can come back to it. And run one competitor at a time: each run makes a lot of data requests, and the skill checks with you before studying more than three sites in one go." },
];

function card(item) {
  const el = document.createElement("article");
  el.className = "card";
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = item.tag;
  const h = document.createElement("h3");
  h.textContent = item.title;
  const p = document.createElement("p");
  p.textContent = item.body;
  el.append(count, h, p);
  return el;
}

document.getElementById("steps").replaceChildren(...steps.map(card));
document.getElementById("allbirds-patterns").replaceChildren(...allbirdsPatterns.map(card));
document.getElementById("allbirds-moves").replaceChildren(...allbirdsMoves.map(card));
document.getElementById("patel-patterns").replaceChildren(...patelPatterns.map(card));
document.getElementById("patel-moves").replaceChildren(...patelMoves.map(card));
document.getElementById("setup").replaceChildren(...setup.map(card));
