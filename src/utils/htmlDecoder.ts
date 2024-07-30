// Custom function to decode HTML entities
const customDecode = (input: string): string => {
    let decoded = input.replace(/&amp;/g, '&');     // Decode &amp; to &
    decoded = decoded.replace(/&#40;/g, '(');       // Decode &#40; to (
    decoded = decoded.replace(/&#41;/g, ')');       // Decode &#41; to )
    decoded = decoded.replace(/&quot;/g, '"');      // Decode &quot; to "
    decoded = decoded.replace(/&ldquo;/g, '“');     // Decode &ldquo; to “
    decoded = decoded.replace(/&rdquo;/g, '”');     // Decode &rdquo; to ”
    decoded = decoded.replace(/&#58;/g, ':');       // Decode &#58; to :
    decoded = decoded.replace(/&lt;/g, '<');        // Decode &lt; to <
    decoded = decoded.replace(/&gt;/g, '>');        // Decode &gt; to >
    return decoded;
  };
  
  export default customDecode;
  