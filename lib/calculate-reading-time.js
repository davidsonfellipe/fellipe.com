function calculateReadingTime(text, wordsPerMinute = 200) {
    const words = text.trim().split(/\s+/);
  
    const minutes = Math.ceil(words.length / wordsPerMinute);
  
    return `${minutes} min read`;
  }

  export default calculateReadingTime;