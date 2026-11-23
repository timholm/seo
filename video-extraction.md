# Full extraction: "Reverse Engineer ANY Website's SEO With Claude (FREE)"

- URL: https://www.tiktok.com/t/ZPNr5FUFW/
- Creator: @jgoldieseo (Julian Goldie; his Skool community is named in the on-screen testimonials)
- Video ID: 7707933703904840991
- Posted: 2026-11-14
- Length: 19 minutes 15 seconds (1,155 s). A long, animated explainer, not a raw screen recording.
- Stats at extraction (2026-11-22): 2,243 views, 91 likes, 1 comment.
- Description: "Reverse Engineer ANY Website's SEO With Claude (FREE)! A free Claude Code skill shows how any website gets its Google traffic. I ran it on a big online store and a huge agency, and it found the pages you can copy. If you want to learn AI automation for free, link in the bio" #ClaudeCode #SEO #Claude #AISEO
- Method: full narration from the caption track (saved as narration.txt), plus on-screen text read from frames sampled every 5 seconds (231 frames). Where the captions and the screen disagree, the screen wins; the caption track garbles several numbers (noted below).

## The thing itself

"Reverse Engineer SEO" is a free, open source skill for Claude Code, published by a team called Every App on SEO Party, a library of skills built for SEO. The page also lists Codex and Cursor. It runs on top of OpenSEO (openseo.so), an open source SEO tool: hosted, or self-hosted with Docker. OpenSEO is what gives the agent eyes: real ranking data, keyword data and link data, with the numbers coming from a connected DataForSEO account. Claude Code cannot see Google's numbers on its own.

The one-sentence pitch, in his words: you type one sentence, you give it the name of a website that's beating you, and a few minutes later you get the whole playbook: which pages bring in the visitors, what people are searching to find them, which pages other websites keep linking to, and the exact moves you can copy, with the very first page to build.

## The eight steps (narration, confirmed by on-screen step captions)

1. Size the website up: monthly Google visitors, how many searches it shows up for, how many sites link to it.
2. Split the traffic in two: brand searches (people typing the company's name) vs everything else. "This is the most important split in the whole report."
3. Find the pages that earn the non-brand traffic.
4. Group those pages by type (product pages, collection pages, blog posts, free tools) and measure each type.
5. Check how often Google's AI Overview answers name the site as a source.
6. Open the top pages and read them: written by hand or stamped out from one template.
7. Find the link magnets: the strongest sites linking in, and which pages attract those links.
8. Write the moves: each move is one thing the numbers show working, shrunk to fit a smaller business, with the first page to build. The report ends with a section called "What won't copy", which stops you chasing things you can't win.

## Worked example 1: Allbirds (allbirds.com)

The exact prompt, read off the screen in the Claude Code window:

"Reverse-engineer how allbirds.com gets its Google traffic, US market. My business: a small online store selling eco-friendly sneakers. Fit the moves to me. Save the full report."

On screen during the run: no project exists yet, so the skill creates one for the user's store by itself; it hits a limit on one filter, notices, and reruns that step with fewer brand names; "Calling openseo 8 times" in one frame.

The headline numbers (narration): about 87,000 visitors a month from Google in the US, shows up for about 3,200 searches, over 9,000 websites link to it.

The surprise: 99.6% of the traffic from its top hundred searches is brand ("allbirds", "allbirds shoes", "allbirds near me"). Google is not sending Allbirds new customers; people who already know the name use Google as a shortcut. You cannot copy people knowing your name.

The non-brand winners, from the report table shown on screen ("REAL REPORT · SEARCH PATTERNS, allbirds.com, OpenSEO data, US"):

| Pattern | Example keywords | Monthly searches | Answered by |
|---|---|---|---|
| [colour] shoes / sneakers | all black shoes, all black sneakers, grey shoes, grey sneakers, gray shoes | 18,100 / 8,100 / 5,400 / 2,900 | /collections/[colour] |
| [material or no-material] | no leather (plant leather) | 320, rising | /pages/[material] |
| best shoes for [job] | teacher shoes | 3,600 (9,900 Aug) | /blogs/the-perch |
| walking vs running questions | can running [shoes...] | 2,900 | /pages/walking-versus-running... (AI Overview source) |

More on-screen facts: the /collections/ section is template-made, ranks for 108 keywords and takes a 27% share of traffic. The colour pages are thin (a one-line intro, the same sentence on every colour page, then a grid of shoes), the ranking pages have barely any links, and the difficulty score for those searches is zero. The plant leather page ranks No. 6 for "no leather" with about 75 words of copy ("75 WORDS OF COPY" is the on-screen caption). The Best Shoes for Teachers guide ranks for "teacher shoes", which jumps every August for back to school.

Link magnets: the sustainability pages, the materials pages and the carbon footprint calculator. The on-screen link magnet card reads "LINK MAGNET · STORY PAGES, our story + causes, 6 linking sites, e.g. salesforce.com", with linking sites shown around it including theguardian.com, hubspot.com, github.com, surveymonkey.com, cloudinary.com, intercom.com and constantcontact.com. His line: when journalists and marketers need a number to back up a point, they link to the page that has the number.

The four moves written for the small sneaker store:

1. Build colour pages with your angle on them: not "black sneakers" (you will never win it) but "black vegan sneakers", "white recycled sneakers", with a real intro, a short FAQ and the shoes underneath. First page to build, shown on the blueprint card: /collections/black-vegan-sneakers.
2. Write one proper page for every material you sell: what it is, how long it lasts, how to look after it, then the shoes made from it.
3. Write a "best shoes for" guide for every job where people stand all day, published before the season starts: teachers before back to school, nurses, retail staff.
4. Put your real sustainability numbers on one page and use it to get featured in gift guides and roundups.

## Worked example 2: Neil Patel (neilpatel.com)

Told the skill his business is a small SEO and content agency that wants more client leads. Headline numbers (narration): about 30,000 visitors a month from Google in the US, over 42,000 searches, close to 94,000 linking websites.

The split is the opposite of Allbirds. On screen: brand searches 20.5%, non-brand 79.5% ("free tools + guides bring the rest"). About a quarter of traffic comes from free SEO tool searches; most of the rest from big explainer articles.

The report table shown on screen ("REAL REPORT · SEARCH PATTERNS, neilpatel.com, OpenSEO data, US"):

| Pattern | Example keywords | Monthly searches | Answered by |
|---|---|---|---|
| free [SEO task] tool / checker | backlinks checker, free keyword research tool, free seo audit, website traffic checker | 135K / 2.4K / 1.3K / 12.1K | Tool pages (URLs unknown) |
| [marketing] calculator | stat sig calculator | 2.9K | Calculator page |
| [service] services / [service] for [industry] | website conversion optimization services, link building for ecommerce | 880 / 140 | Service and niche pages |
| [platform problem] explained | how to tell if i am in facebook jail, what is facebook jail, vendor central amazon | 3.6K / 720 / 6.6K | How-to guides |
| [other company's product] | google lens, namecheap, screaming frog, bing webmaster tools | 1.23M / 201K / 12.1K / 18.1K | Explainers, mostly position 11 to 40 |
| what is [marketing term] | social media marketing, digital marketing, content marketing | 165K / 165K / 135K | Pillar guides, positions 20 to 44 |

What won't copy: the free tools. They run on live data feeds and a small agency should not try to build them. (On-screen caption over the split: "RUNS ON LIVE DATA FEEDS".)

The quiet winners: a page for "website conversion optimization services" ranks 5th with a difficulty score of 4 out of 100; "link building for ecommerce" ranks No. 1 with difficulty 6. People looking to hire, low competition, high intent.

The four moves for the small agency:

1. Build one service page for each niche you actually serve: not "SEO services", but "SEO services for ecommerce stores", with your own proof, process and case studies on the page.
2. Build one small free calculator that collects leads, not a giant tool: something like a website traffic calculator where the result is emailed to the person with an offer of a free audit underneath.
3. Turn "free SEO audit" into a lead page, not software: the first page to build is "Free SEO Audit for Ecommerce Stores", with a short form and a sample audit to download.
4. Write guides for the problems your clients actually have ("how to tell if I'm in Facebook jail" ranks top five with almost no competition; the agency version is "why did my Google Business profile get suspended and how to fix it"), each linking to the service that fixes it.

Bonus use: run the skill on a prospect's biggest competitor before a sales call and walk in with the teardown and the first three pages the prospect should build.

## Setup, step by step (as taught in the video)

1. Get OpenSEO running: hosted at openseo.so (just sign in) or on your own computer with Docker, which is what he did. Connect a DataForSEO account; that is where the keyword and link numbers come from.
2. Connect OpenSEO to Claude Code: inside OpenSEO, "AI and agents" gives the exact connect line; for his local version it is one command that adds OpenSEO as a server (MCP) Claude Code can talk to. The on-screen OpenSEO page is titled "Get superpowers with the MCP" and also lists /seo-coach, /seo-audit, /keyword-research and /competitor-analysis, with "Copy setup prompt", "Add to ChatGPT" and "Add to Claude" buttons.
3. Install the skill from the SEO Party page: an install command pasted into the terminal (it uses GitHub's tooling to drop the skill into Claude Code), or a "copy for your agent" button to paste the instructions into any agent. His warning: the page says the skill passed automatic checks but nobody has reviewed it by hand yet, so open the skill file and read it before you install it. It is just a page of plain instructions.
4. Open Claude Code and type the sentence: "Reverse engineer how [website] gets its Google traffic", then your market, your business, "fit the moves to me", and "save the full report".

Lessons from running it: name the country (he said US market and every number came back for the US); add "save the full report" to a file; the skill asks before it saves keywords into OpenSEO, so you stay in control; each run makes a lot of data requests, so the skill says to check with you before studying more than three sites in one go. Run one competitor, act on it, then run the next.

## The old way vs the new way (his framing)

Old way: open a big SEO tool, get a wall of charts and thousands of keywords in a table, sort by traffic, see their top keyword is their own brand name, feel stuck, pick a few keywords that look good, write some blog posts and hope. No idea which page type earns the traffic, which pages attract links, or which parts you can't copy anyway.

New way: same kind of data, but the agent does the thinking: brand split, page type patterns, reads the pages, finds the link magnets, and hands you three to five moves with the first page to build, sized for a business your size.

## The doubts he answers

- "I'm not technical": the hosted OpenSEO means nothing runs on your computer; connecting is one copied line; using it is one sentence in plain English.
- "Won't Google punish copying?": you copy the pattern, not the content. The Allbirds material page has 75 words; your page can be ten times more useful (on-screen: "75 WORDS → 10X MORE USEFUL").
- "My niche is tiny": that is where it works best; the "what won't copy" section keeps you off the brand searches and the link empire and points you at pages that rank on substance.

## What you can do this week (his closing plan)

1. Pick the one competitor just ahead of you on Google, not the giant.
2. Set up OpenSEO, connect it to Claude Code, install the skill.
3. Run it on that competitor, with your business in the prompt, and save the report.
4. Build the very first page it tells you to build. One page. Next week, the next competitor.

## The sales pitch (marked as such)

The middle and end push his community, the AI Profit Boardroom (aiprofitboardroom.com): the skill pre-set up with OpenSEO plus the exact store and agency prompts from the video, a full SEO system from gap to page to rank tracking, an "Agent OS" so agents share one memory of your business, a 30 day roadmap, four live coaching calls a week, daily tutorials, and "over 3,400 business owners". On-screen testimonials name Julian Goldie and his Skool AIPB Classroom. None of that is needed to use the free skill; the video itself teaches the whole setup.

## Honest notes

- The numbers are OpenSEO/DataForSEO estimates as reported in the video, not audited figures. The 87,000 and 30,000 monthly visitor figures and the search counts come from the narration; the pattern tables, the 99.6% and 20.5% brand splits, the 27% collections share and the difficulty scores come from the report screens shown on camera.
- The caption track garbles two numbers: it renders the "no leather" growth as "20 a month to about 13 a month", while the on-screen report table says 320 monthly searches, rising. The table is used here.
- "Every App" and "SEO Party" are named in the narration as the skill's publisher and library; the video does not show a URL for the skill page on screen.
