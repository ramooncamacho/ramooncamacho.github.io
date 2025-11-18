document.addEventListener('DOMContentLoaded', function () {
  const tagLinks = document.querySelectorAll('#tags a');
  const articles = document.querySelectorAll('#articles .article-item');

  let selectedTags = [];

  tagLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedTag = this.getAttribute('data-tag');

      // If "All" is clicked, clear all selections
      if (clickedTag === 'all') {
        selectedTags = [];
        tagLinks.forEach((tag) => tag.classList.remove('active'));
        this.classList.add('active');
      } else {
        // Remove "All" from the selection
        document
          .querySelector('#tags a[data-tag="all"]')
          .classList.remove('active');

        if (selectedTags.includes(clickedTag)) {
          // If the tag was already selected, remove it
          selectedTags = selectedTags.filter((tag) => tag !== clickedTag);
          this.classList.remove('active');
        } else {
          // If the tag was not selected, add it
          selectedTags.push(clickedTag);
          this.classList.add('active');
        }
      }

      // If no tag is selected, show all articles
      if (selectedTags.length === 0) {
        articles.forEach((article) => {
          article.style.display = 'block';
        });
      } else {
        // Check if the article contains any of the selected tags
        articles.forEach((article) => {
          const articleTagsAttr = article.getAttribute('data-tags') || '';

          // Split the 'data-tags' string into an array
          const articleTags = articleTagsAttr
            .split(' ')
            .map((tag) => tag.trim());

          // Check if the selected tags are included in the article tags
          const matchesSelectedTags = selectedTags.some((tag) => {
            return articleTags.includes(tag);
          });

          // Show or hide the article based on matching tags
          if (matchesSelectedTags) {
            article.style.display = 'block';
          } else {
            article.style.display = 'none';
          }
        });
      }
    });
  });
});
