const htmlmin = require('html-minifier');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Setup files
    eleventyConfig.addWatchTarget('./_tmp/style.css');
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });
    eleventyConfig.addPassthroughCopy("src/**/*.js");
    eleventyConfig.addPassthroughCopy("assets/*.png", "assets");
    eleventyConfig.addPassthroughCopy("assets/*.jpg", "assets");
    eleventyConfig.addPassthroughCopy("assets/*.ico", "assets");
    eleventyConfig.addPassthroughCopy("assets/profile_pictures/*.jpeg", "assets/profile_pictures");

    // This adds a variable that can be used in the template. In this case, we use build time to identify the current version of the site
    eleventyConfig.addShortcode('version', function () {
        return now;
    });

    // If being deployed (build rather than start), minify everything
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith('.html')
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    });

    // Bring across NPM modules
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/alpine.js': './common-js/alpine.js',
        './node_modules/@supabase/supabase-js/dist/umd/supabase.js': './common-js/supabase.js',
        './node_modules/jsvectormap/dist/js/jsvectormap.min.js': './common-js/jsvectormap.min.js',
        './node_modules/jsvectormap/dist/maps/*.js': './common-js/maps/',
        './node_modules/jsvectormap/dist/css/jsvectormap.min.css': './jsvectormap.min.css',
    });
    // Could supabase be used the same way alpine is here?

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};