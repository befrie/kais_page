import fs from "fs";
import path from "path";
import { allowedNodeEnvironmentFlags, cwd } from "process";
import matter from "gray-matter";

const mdDirectory = path.join(process.cwd(), "guitars");

export function getAllMds() {
  return fs.readdirSync(mdDirectory);
}

export function getMdData(mdIdentifier) {
  const mySlug = mdIdentifier.replace(/\.md$/, "");
  const filePath = path.join(mdDirectory, `${mySlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const mdData = {
    slug: mySlug,
    ...data,
    content,
  };
  return mdData;
}

export function getAllMdFiles() {
  const dirContent = getAllMds();
  const mdFiles = dirContent.filter((fName) => fName.endsWith(".md"));
  const allMdFiles = mdFiles.map((mdFile) => {
    return getMdData(mdFile);
  });

  return allMdFiles;
  // const sortedMdFiles = allMdFiles.sort((mdFile1, mdFile2) =>
  //   mdFile1.date > mdFile2.date ? -1 : 1
  // );
  // console.log(sortedMdFiles);
  // return sortedMdFiles;
}

export function getFeaturedMdFiles() {
  const allMdFiles = getAllMdFiles();
  // console.log("files: ", allMdFiles);
  const featuredMdFiles = allMdFiles.filter((mdFile) => mdFile.isFeatured);
  // console.log("featured: ", featuredMdFiles);
  return featuredMdFiles;
}
