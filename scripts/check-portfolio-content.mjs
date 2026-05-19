import fs from "node:fs";
import path from "node:path";

const dataPath = path.join(process.cwd(), "data", "portfolio.json");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(fs.existsSync(dataPath), "data/portfolio.json must exist");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

assert(data.hero?.name === "Jacint Alama", "hero.name must be Jacint Alama");
assert(
  data.hero?.primaryTitle?.includes("Developer"),
  "hero.primaryTitle must describe developer role",
);
assert(
  data.hero?.primaryTitle?.includes("visual maker"),
  "hero.primaryTitle must include visual maker positioning",
);
assert(
  Array.isArray(data.stats) && data.stats.length >= 4,
  "stats must include at least 4 items",
);
assert(
  Array.isArray(data.selectedWork) &&
    data.selectedWork.length >= 5 &&
    data.selectedWork.length <= 6,
  "selectedWork must include 5 to 6 curated projects",
);
assert(
  data.selectedWork.some((project) => project.title === "Waffenplatz"),
  "selectedWork must include Waffenplatz",
);
assert(
  data.selectedWork.some((project) => project.title === "RAVEN WEAPON"),
  "selectedWork must include RAVEN WEAPON",
);
assert(
  data.selectedWork.some(
    (project) => project.title === "Petrol Stations Directory",
  ),
  "selectedWork must include Petrol Stations Directory",
);
assert(
  Array.isArray(data.designArchive) && data.designArchive.length >= 8,
  "designArchive must preserve the graphic design items",
);
assert(
  Array.isArray(data.capabilityGroups) && data.capabilityGroups.length === 3,
  "capabilityGroups must include exactly 3 groups",
);
assert(
  data.contact?.email === "alamajacintg04@gmail.com",
  "contact email must match current portfolio",
);
assert(
  data.contact?.phone === "+63 951 110 6262",
  "contact phone must match current portfolio",
);

console.log("Portfolio content contract passed");
