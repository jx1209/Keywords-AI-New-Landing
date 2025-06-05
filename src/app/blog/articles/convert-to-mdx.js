const fs = require('fs');
const path = require('path');
//TESTING
function getBlogsFromArticlesFile() {
  try {
    const fileContent = fs.readFileSync('./articles.tsx', 'utf8');
    
    const blogsMatch = fileContent.match(/export const blogs[^=]*=\s*(\[[\s\S]*?\]);?\s*$/m);
    
    if (!blogsMatch) {
      console.error('Could not find blogs array in articles.tsx');
      console.log(' Make sure your articles.tsx has: export const blogs = [...]');
      return [];
    }
    
    let blogsArrayString = blogsMatch[1];
    blogsArrayString = blogsArrayString.replace(/:\s*Blog\[\]/g, '');
    
    const blogs = eval(blogsArrayString);

    console.log(` Successfully loaded ${blogs.length} blogs from articles.tsx`);
    return blogs;
    
  } catch (error) {
    console.error(' Error reading articles.tsx:', error.message);
    console.log('\n Troubleshooting tips:');
    console.log('1. Make sure articles.tsx is in the same folder as this script');
    console.log('2. Check that articles.tsx exports the blogs array');
    console.log('3. Try Option 3 below if this doesn\'t work');
    return [];
  }
}
//manual?
function manualImport() {
  console.log('\n Manual Import Instructions:');
  console.log('1. Open articles.tsx');
  console.log('2. Copy ONLY the blogs array (starting from [ to ending ])');
  console.log('3. Come back here and replace the empty array below');
  console.log('4. Run the script again\n');
  
  // Replace this empty array with your blogs data if needed
  return []

      }


function convertBlogToMDX(blog) {
  let mdxContent = '';

  mdxContent += `---
title: ${blog.title}
date: ${blog.timestamp}
author: ${blog.author.name}
cover: ${blog.cover.url}
---

`;

  mdxContent += `## ${blog.title}\n\n`;
  
  if (blog.paragraphs && blog.paragraphs.length > 0) {
    blog.paragraphs.forEach(paragraph => {

      if (paragraph.primary_title) {
        mdxContent += `### ${paragraph.primary_title}\n\n`;
      }
      
      if (paragraph.text) {

        let text = paragraph.text
          .replace(/\n+/g, '\n') // Normalize line breaks
          .trim();
        
        mdxContent += `${text}\n\n`;
      }

      if (paragraph.image) {
        const caption = paragraph.image.caption || '';
        mdxContent += `![${caption}](${paragraph.image.url})\n\n`;
      }
    });
  }
  
  return mdxContent.trim();
}

function createSlugFromPath(blogSlug) {
  return blogSlug.replace('/blog/', '');
}

function convertAllBlogsToMDX() {
  
  let blogs = getBlogsFromArticlesFile();
  
  if (blogs.length === 0) {
    blogs = manualImport();
    if (blogs.length === 0) {
      console.log(' No blog data found. Please check the troubleshooting steps above.');
      return;
    }
  }
  
  const outputDir = './blog-output';
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  blogs.forEach((blog, index) => {
    try {
    
      const slug = createSlugFromPath(blog.slug);
      const blogDir = path.join(outputDir, slug);
      
      if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
      }
    
      const mdxContent = convertBlogToMDX(blog);
       
      fs.writeFileSync(
        path.join(blogDir, 'src.mdx'),
        mdxContent
      );
      
      console.log(` ${index + 1}/${blogs.length} - Converted: ${blog.title}`);
      successCount++;
      
    } catch (error) {
      console.error(`Error converting "${blog.title}":`, error.message);
      errorCount++;
    }
  });
  
  console.log('\n Conversion Complete!');
  console.log(` Successfully converted: ${successCount} blog posts`);
  if (errorCount > 0) {
    console.log(` Errors: ${errorCount} blog posts`);
  }
  
  console.log(`\n Converted files are in: ${outputDir}/`);
  console.log('File structure:');
  console.log('blog-output/');
  console.log('├── claude-haiku-vs-gpt-4/');
  console.log('│   └── src.mdx');
  console.log('├── claude-3.5-vs-gpt-4o/');
  console.log('│   └── src.mdx');
  console.log('└── ... (all your other blog posts)');
  
  console.log('\n Next steps:');
  console.log('1. Review the generated MDX files');
  console.log('2. Copy them to your main blog folder');
  console.log('3. Show your mentor the new structure!');
}

// Test function to verify data loading
function testDataLoading() {
  console.log('Testing data loading from articles.tsx...\n');
  
  const blogs = getBlogsFromArticlesFile();
  
  if (blogs.length > 0) {
    console.log(`Found ${blogs.length} blogs`);
    console.log(`First blog: "${blogs[0].title}"`);
    console.log(`Last blog: "${blogs[blogs.length - 1].title}"`);
    console.log('\n Data loading successful! Ready to convert.');
  } else {
    console.log(' No blogs found. Check troubleshooting steps above.');
  }
}

// Run script
if (require.main === module) {
  console.log(' Keywords AI Blog Converter (No Data Copying Needed!)');
  console.log('=' .repeat(60));
  
  testDataLoading();
  
  console.log('\n' + '=' .repeat(60));
  
  // Then run the full conversion
  convertAllBlogsToMDX();
}

module.exports = { convertBlogToMDX, convertAllBlogsToMDX, testDataLoading };
